/* 
 * version : 7.0.0.u3043209 
 * resolution : 720*1280 
 * description :  
 */ 
define("version", "7.0.0.u3043209");  
define("resolution", "720*1280");  
define("requireVersion", "2.8.0");  
var device = Device.searchObject(sigmaConst.DevSelectOne);
if(!device) {
	print("Cannot find device");
	throw "Cannot find device";
}; 
device.click(0.8553,0.9148); 
device.delay(17238); 
device.click(0.4721,0.4048); 
device.delay(19628); 
device.click(0.0838,0.8793); 
device.delay(20125); 
device.click(0.5076,0.5881); 
