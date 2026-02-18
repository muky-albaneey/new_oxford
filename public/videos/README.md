# Hero Video Directory

## Video File Requirements

Place your hero section video file here with the following specifications:

### File Name
- `hero-school.mp4` (primary)
- `hero-school.webm` (optional, for better compression)

### Technical Specifications
- **Format**: MP4 (H.264 codec) or WebM
- **Resolution**: 1920x1080 (Full HD) minimum
- **Duration**: 30-60 seconds (will loop)
- **Frame Rate**: 24fps or 30fps
- **File Size**: Optimized for web (under 10MB recommended)
- **Audio**: None (muted for autoplay)

### Content Guidelines
The video should showcase:
- Campus facilities and buildings
- Students engaged in learning
- Co-curricular activities (sports, arts, STEM)
- Community and diversity
- Achievement and celebration moments

### Video Optimization Tools
- **HandBrake**: Free video compression tool
- **FFmpeg**: Command-line video processing
- **CloudConvert**: Online video converter
- **Adobe Media Encoder**: Professional encoding

### Example FFmpeg Commands

```bash
# Convert to optimized MP4
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k -movflags +faststart hero-school.mp4

# Create WebM version
ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 2M -c:a libopus hero-school.webm
```

### Current Status
- Video component is ready and configured
- Will automatically use video if file exists
- Falls back to image if video unavailable

