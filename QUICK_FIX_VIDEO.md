# Quick Fix: Convert MOV to MP4

## The Problem
Your video file `hero-school.MOV` (65MB) is failing to load because:
1. **MOV format has limited browser support** - Works in Safari, but NOT in Chrome, Firefox, or Edge
2. **File is too large** - 65MB is too big for web (should be under 10MB)

## The Solution: Convert to MP4

### Option 1: Online Converter (Easiest - No Installation)

1. Go to: **https://cloudconvert.com/mov-to-mp4**
2. Upload `public/videos/hero-school.MOV`
3. Click "Show advanced options"
4. Set:
   - Quality: Medium or High
   - Video Codec: H.264
   - Resolution: 1920x1080
5. Click "Convert"
6. Download the converted file
7. Rename to `hero-school.mp4`
8. Place in `public/videos/hero-school.mp4`
9. Update `app/page.tsx` line 74 to: `video="/videos/hero-school.mp4"`

### Option 2: Using VLC (Free, Already Installed?)

1. Open VLC Media Player
2. Go to: **Media → Convert/Save**
3. Click **Add** and select `public/videos/hero-school.MOV`
4. Click **Convert/Save**
5. Choose profile: **"Video - H.264 + MP3 (MP4)"**
6. Click the wrench icon to customize:
   - Video codec: H.264
   - Bitrate: 2000 kbps
   - Scale: 1920x1080
7. Click **Start**
8. Save as `hero-school.mp4` in `public/videos/`
9. Update `app/page.tsx` line 74 to: `video="/videos/hero-school.mp4"`

### Option 3: Install FFmpeg and Use Script

1. Install FFmpeg:
   ```powershell
   winget install ffmpeg
   ```
   Or download from: https://ffmpeg.org/download.html

2. Run the conversion script:
   ```powershell
   .\scripts\convert-video.ps1
   ```

3. Update `app/page.tsx` line 74 to: `video="/videos/hero-school.mp4"`

## After Conversion

1. **Test the video**:
   - Open browser console (F12)
   - Check for "Video loaded successfully" message
   - Verify video plays automatically

2. **File should be**:
   - Format: MP4
   - Size: Under 10MB (ideally 5-8MB)
   - Resolution: 1920x1080
   - Codec: H.264

## Current Status

The Hero component is configured and ready. It will:
- ✅ Try to load the MOV file (works in Safari)
- ✅ Fall back to MP4 if available
- ✅ Show image if video completely fails
- ✅ Display loading indicator while loading

**Once you convert to MP4, the video will work in all browsers!**

