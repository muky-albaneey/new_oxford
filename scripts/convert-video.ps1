# PowerShell script to convert MOV to MP4 for hero section
# Requires FFmpeg to be installed

$inputFile = "public\videos\hero-school.MOV"
$outputFile = "public\videos\hero-school.mp4"

Write-Host "Converting $inputFile to $outputFile..." -ForegroundColor Yellow

# Check if FFmpeg is available
$ffmpeg = Get-Command ffmpeg -ErrorAction SilentlyContinue
if (-not $ffmpeg) {
    Write-Host "FFmpeg not found. Please install FFmpeg first:" -ForegroundColor Red
    Write-Host "  winget install ffmpeg" -ForegroundColor Cyan
    Write-Host "  Or download from: https://ffmpeg.org/download.html" -ForegroundColor Cyan
    exit 1
}

# Convert with optimization for web
& ffmpeg -i $inputFile `
    -c:v libx264 `
    -preset medium `
    -crf 28 `
    -maxrate 2M `
    -bufsize 4M `
    -c:a aac `
    -b:a 96k `
    -movflags +faststart `
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" `
    -y `
    $outputFile

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nConversion successful!" -ForegroundColor Green
    Write-Host "Output file: $outputFile" -ForegroundColor Green
    
    $originalSize = (Get-Item $inputFile).Length / 1MB
    $newSize = (Get-Item $outputFile).Length / 1MB
    $savings = $originalSize - $newSize
    
    Write-Host "`nFile size comparison:" -ForegroundColor Cyan
    Write-Host "  Original (MOV): $([math]::Round($originalSize, 2)) MB" -ForegroundColor White
    Write-Host "  Converted (MP4): $([math]::Round($newSize, 2)) MB" -ForegroundColor White
    Write-Host "  Space saved: $([math]::Round($savings, 2)) MB" -ForegroundColor Green
    
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "1. Update app/page.tsx to use: video=`"/videos/hero-school.mp4`"" -ForegroundColor White
    Write-Host "2. Test the video in your browser" -ForegroundColor White
} else {
    Write-Host "`nConversion failed. Check the error messages above." -ForegroundColor Red
}

