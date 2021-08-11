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
closeapp=device.closeApp(runAppName);
device.delay(1*1000);
print("尝试二次关闭"); 
if (closeapp == 0) {
    print("成功关闭钉钉应用进程."); 
    var ret=device.restartApp(runAppName);
    if (ret == 0) {
        print("成功重启钉钉中...");
        device.delay(22*1000);
        print("预计处理完毕！");
        print("--------准备点击智能工作助理----------");
        device.click(0.1058,0.3975); //Xiaomi-Redmi 4A	Input	click	0.1058, 0.3975
        print("--------点击完毕----------");
        device.delay(20*1000);
        print("--------准备点击去打卡----------");
        device.click(0.1120,0.8816); 
        print("--------点击完毕----------");
        device.delay(20*1000); 
        print("--------准备点击更新打卡----------");
        device.click(0.8120,0.3519); 
        print("--------点击完毕----------");
        device.delay(3*1000); 
        print("--------准备点击确定更新----------");
        device.click(0.7755,0.5660); 
        print("--------点击完毕----------");
        print("--------准备点击上/下班----------");
        device.click(0.5391,0.5804); 
        print("--------点击完毕----------");
    } else {
        print(lastError());
    }

} else {
    print("无法打开钉钉,请确保手机已经安装应用了!");
}
