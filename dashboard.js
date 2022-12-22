
function returnApiLink(protocol, host, port) {
  return protocol+"://"+host+":"+port;
}
var linkApi=returnApiLink("http","localhost","5000");