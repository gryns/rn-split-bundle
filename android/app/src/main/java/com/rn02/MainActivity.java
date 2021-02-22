package com.rn02;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
/**启动页**/
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
/**end**/

public class MainActivity extends ReactActivity {

  /** 启动页 **/
  @Override
  protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this , true);  // 展示启动页设置代码
      super.onCreate(savedInstanceState);

      //先加载基础包
      ReactInstanceManager reactInstanceManager = ((ReactApplication)getApplication()).getReactNativeHost().getReactInstanceManager();
      if (!reactInstanceManager.hasStartedCreatingInitialContext()) {
          reactInstanceManager.createReactContextInBackground();//这里会先加载基础包，也可以不加载
      }
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RN02";
  }
}
