$ErrorActionPreference = 'Stop'
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$manifest = Get-Content -LiteralPath (Join-Path $projectRoot 'manifest.json') -Raw | ConvertFrom-Json
$version = [string]$manifest.version
$releaseDir = Join-Path $projectRoot 'release'
$buildStamp = Get-Date -Format 'yyyyMMdd-HHmmss'
$archive = Join-Path $releaseDir ("Chanopy-$version-$buildStamp.zip")
$tempRoot = [System.IO.Path]::GetFullPath($env:TEMP).TrimEnd('\') + '\'
$stage = Join-Path $tempRoot ("ChanopyPackage-" + [guid]::NewGuid().ToString('N'))
$stageFull = [System.IO.Path]::GetFullPath($stage)

if (-not $stageFull.StartsWith($tempRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
  throw "Temporary staging path escaped TEMP: $stageFull"
}
if (Test-Path -LiteralPath $archive) {
  throw "Archive already exists; move or rename it before packaging: $archive"
}

try {
  New-Item -ItemType Directory -Path $stageFull | Out-Null
  foreach ($relative in @('manifest.json', 'LICENSE', 'NOTICE.md')) {
    $source = Join-Path $projectRoot $relative
    if (-not (Test-Path -LiteralPath $source -PathType Leaf)) { throw "Missing package file: $relative" }
    Copy-Item -LiteralPath $source -Destination $stageFull
  }
  $distSource = Join-Path $projectRoot 'dist'
  if (-not (Test-Path -LiteralPath $distSource -PathType Container)) { throw 'Missing package directory: dist' }
  $distDestination = Join-Path $stageFull 'dist'
  New-Item -ItemType Directory -Path $distDestination | Out-Null
  Get-ChildItem -LiteralPath $distSource -File | Copy-Item -Destination $distDestination
  foreach ($relative in @('assets/icons')) {
    $source = Join-Path $projectRoot $relative
    if (-not (Test-Path -LiteralPath $source -PathType Container)) { throw "Missing package directory: $relative" }
    $destination = Join-Path $stageFull $relative
    New-Item -ItemType Directory -Path $destination -Force | Out-Null
    Get-ChildItem -LiteralPath $source -File | Copy-Item -Destination $destination
  }
  foreach ($relative in @('db/channels.json', 'db/overrides.json')) {
    $source = Join-Path $projectRoot $relative
    if (-not (Test-Path -LiteralPath $source -PathType Leaf)) {
      if ($relative -eq 'db/channels.json') { throw "Missing package data: $relative" }
      continue
    }
    $destination = Join-Path $stageFull (Split-Path $relative -Parent)
    New-Item -ItemType Directory -Path $destination -Force | Out-Null
    Copy-Item -LiteralPath $source -Destination $destination
  }
  New-Item -ItemType Directory -Path $releaseDir -Force | Out-Null
  Compress-Archive -Path (Join-Path $stageFull '*') -DestinationPath $archive -CompressionLevel Optimal
  Write-Output "Created $archive"
} finally {
  if ((Test-Path -LiteralPath $stageFull) -and $stageFull.StartsWith((Join-Path $tempRoot 'ChanopyPackage-'), [System.StringComparison]::OrdinalIgnoreCase)) {
    Remove-Item -LiteralPath $stageFull -Recurse -Force
  }
}
