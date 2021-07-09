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
device.click(0.8120,0.3519); 
device.delay(3688); 
device.click(0.7755,0.5660); 
