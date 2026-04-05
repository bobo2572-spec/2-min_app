$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8080/')
$listener.Start()
Write-Host 'Server running on http://localhost:8080' -ForegroundColor Green

while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $reqPath = $ctx.Request.Url.LocalPath
    if ($reqPath -eq '/') { $reqPath = '/index.html' }
    $filePath = 'c:\Users\bobo2\Desktop\2-min_app' + $reqPath.Replace('/', '\')
    try {
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $ext = [System.IO.Path]::GetExtension($filePath)
        $ct = switch ($ext) {
            '.html' { 'text/html; charset=utf-8' }
            '.js'   { 'application/javascript; charset=utf-8' }
            '.css'  { 'text/css; charset=utf-8' }
            '.json' { 'application/json; charset=utf-8' }
            default { 'text/plain' }
        }
        $ctx.Response.ContentType = $ct
        $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } catch {
        $ctx.Response.StatusCode = 404
        $msg = [System.Text.Encoding]::UTF8.GetBytes('Not found')
        $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
    }
    $ctx.Response.Close()
}
