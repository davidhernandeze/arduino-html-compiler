#include "ESP8266WebServer.h"
#include "WiFiClient.h"
#include "webapp.h"

ESP8266WebServer server(80);

void handleRoot() {
  server.send(200, "text/html", app);
}

void setup() {
  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");
  WiFi.softAP("Arduino Server");

  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
  server.on("/", handleRoot);
  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  server.handleClient();
}
