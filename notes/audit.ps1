$html = Get-Content 'neet-ecology-complete.html' -Raw
$opens = ([regex]::Matches($html, '<div')).Count
$closes = ([regex]::Matches($html, '</div>')).Count
$diff = $opens - $closes
Write-Host "Open divs: $opens, Close divs: $closes, Diff: $diff"
