String app = "<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width,initial-scale=1\"><title>Example HTML</title><style>body{background-color:#1a598e;color:#f5f5f5;font-family:Verdana,serif;margin:0;padding:0;text-align:center;font-size:2rem}.button{margin:2em;padding:1rem;text-transform:uppercase;border:none;color:#f5f5f5;cursor:pointer}</style></head><body><div><p>This is a basic html with CSS and JS</p><button id=change-color-button class=button>Click me!</button></div></body><script>const button=document.getElementById(\"change-color-button\");button.addEventListener(\"click\",()=>{button.style.backgroundColor=\"forestgreen\"===button.style.backgroundColor?\"red\":\"forestgreen\"}),button.style.backgroundColor=\"forestgreen\"</script></html>";