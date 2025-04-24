# Create images directory if it doesn't exist
if (-not (Test-Path -Path "images")) {
    New-Item -ItemType Directory -Path "images"
}

# Product image URLs from Unsplash
$productImageUrls = @{
    "smartphone.jpg" = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=800&fit=crop"
    "laptop.jpg" = "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=800&fit=crop"
    "dress.jpg" = "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&h=800&fit=crop"
    "smartwatch.jpg" = "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&h=800&fit=crop"
    "sofa.jpg" = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
    "table.jpg" = "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=800&fit=crop"
}

# Download each product image
foreach ($item in $productImageUrls.GetEnumerator()) {
    Write-Host "Downloading $($item.Key)..."
    try {
        Invoke-WebRequest -Uri $item.Value -OutFile "images\$($item.Key)"
        Write-Host "Successfully downloaded $($item.Key)"
    }
    catch {
        Write-Host "Failed to download $($item.Key): $_"
    }
} 