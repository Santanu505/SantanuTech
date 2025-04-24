# Create images directory if it doesn't exist
if (-not (Test-Path -Path "images")) {
    New-Item -ItemType Directory -Path "images"
}

# Image URLs from Unsplash
$imageUrls = @{
    "hero-image.jpg" = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=800&fit=crop"
    "electronics.jpg" = "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop"
    "fashion.jpg" = "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop"
    "home.jpg" = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=300&fit=crop"
    "about-hero.jpg" = "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=1200&h=800&fit=crop"
    "our-story.jpg" = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    "team-1.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    "team-2.jpg" = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    "team-3.jpg" = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    "team-4.jpg" = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
}

# Download each image
foreach ($item in $imageUrls.GetEnumerator()) {
    Write-Host "Downloading $($item.Key)..."
    try {
        Invoke-WebRequest -Uri $item.Value -OutFile "images\$($item.Key)"
        Write-Host "Successfully downloaded $($item.Key)"
    }
    catch {
        Write-Host "Failed to download $($item.Key): $_"
    }
} 