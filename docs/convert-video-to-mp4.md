# Convert MOV to MP4 for Hero Section

## Issue
Your video file `hero-school.MOV` is 65MB and in QuickTime format. MOV files have limited browser support and the file size is too large for web use.

## Solution: Convert to Optimized MP4

### Option 1: Using FFmpeg (Recommended)

1. **Install FFmpeg** (if not already installed):
   - Download from: https://ffmpeg.org/download.html
   - Or use: `winget install ffmpeg` (Windows)

2. **Convert and Optimize**:
   ```powershell
   cd C:\Users\Hp\new_oxford\public\videos
   ffmpeg -i hero-school.MOV -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k -movflags +faststart -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" hero-school.mp4
   ```

3. **For even smaller file size** (recommended for web):
   ```powershell
   ffmpeg -i hero-school.MOV -c:v libx264 -preset medium -crf 28 -maxrate 2M -bufsize 4M -c:a aac -b:a 96k -movflags +faststart -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" hero-school.mp4
   ```

### Option 2: Using Online Converter

1. Go to: https://cloudconvert.com/mov-to-mp4
2. Upload `hero-school.MOV`
3. Set quality to "High" or "Medium"
4. Download the converted MP4
5. Place it at: `public/videos/hero-school.mp4`

### Option 3: Using HandBrake (GUI Tool)

1. Download HandBrake: https://handbrake.fr/
2. Open `hero-school.MOV`
3. Preset: "Fast 1080p30" or "Web/Google 1080p30"
4. Output: `hero-school.mp4`
5. Start encoding

### Option 4: Using VLC Media Player

1. Open VLC
2. Media → Convert/Save
3. Add `hero-school.MOV`
4. Convert/Save
5. Profile: "Video - H.264 + MP3 (MP4)"
6. Destination: `public/videos/hero-school.mp4`
7. Start

## Target Specifications

- **Format**: MP4 (H.264)
- **Resolution**: 1920x1080 (or maintain aspect ratio)
- **File Size**: Under 10MB (ideally 5-8MB for 30-60 seconds)
- **Frame Rate**: 24fps or 30fps
- **Bitrate**: 2-5 Mbps
- **Audio**: AAC, 96-128 kbps (or remove if not needed)

## After Conversion

1. Replace or rename:
   - Keep original: `hero-school.MOV` (backup)
   - Use new: `hero-school.mp4` (for website)

2. Update `app/page.tsx`:
   ```tsx
   video="/videos/hero-school.mp4"
   ```

3. Test the video:
   - Check browser console for errors
   - Verify autoplay works
   - Test on mobile devices

## Quick Test Command

After conversion, test the file:
```powershell
ffprobe hero-school.mp4
```

This will show video details to verify the conversion was successful.

