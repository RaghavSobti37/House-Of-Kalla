# Get all files and folders in the current directory
$items = Get-ChildItem -Path "." -Force

# Define items to preserve
$preserve = @(".git", "temp_clone", "MASTER MOCKUPS", "LOGOS", "clean_and_copy.ps1")

# Remove non-preserved items
foreach ($item in $items) {
    if ($preserve -notcontains $item.Name) {
        Remove-Item $item.FullName -Recurse -Force
    }
}

# Copy all files from temp_clone to the current directory
Copy-Item -Path "temp_clone\*" -Destination "." -Recurse -Force

# Copy hidden/dot files from temp_clone (like .gitignore, .prettierrc, .prettierignore)
$dotItems = Get-ChildItem -Path "temp_clone" -Force | Where-Object { $_.Name -like ".*" -and $_.Name -ne ".git" }
foreach ($dotItem in $dotItems) {
    Copy-Item -Path $dotItem.FullName -Destination "." -Recurse -Force
}

# Remove temp_clone
Remove-Item -Path "temp_clone" -Recurse -Force
