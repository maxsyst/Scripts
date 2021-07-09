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
var runAppName = "com.alibaba.android.rimet"
var device = Device.getMain();
device.delay(2*1000);
var closeapp=device.closeApp(runAppName);
device.delay(3*1000);
print("回到主页"); 
device.send(sigmaConst.KEY_HOME); 
device.send(sigmaConst.KEY_RECENTAPP); 
device.delay(2000); 
device.click(0.5182,0.9094); 
device.delay(2000); 
print("打开钉钉");
device.click(0.8542,0.9167); 
device.delay(18312); 
print("1");
device.click(0.1536,0.4591); 
print("2");
device.delay(10140); 
print("开始打卡");
device.click(0.1120,0.8816); 
print("3");
device.delay(16521); 
device.click(0.5391,0.5804); 
print("4");
print("打卡完成");
// dievice.send(sigmaConst.KEY_HOME); 
// device.send(sigmaConst.KEY_RECENTAPP); 
// device.delay(5294); 
// print("5");
// device.click(0.5026,0.8991); 
// print("6");
// device.send(sigmaConst.KEY_RECENTAPP); 
// device.delay(2484); 
// device.click(0.4974,0.8962); 
// device.send(sigmaConst.KEY_HOME); 
// print("打卡结束.");
