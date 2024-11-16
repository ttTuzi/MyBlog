import { useEffect } from "react";

export function useKey(key, action) {
  /**
   * 1. 按下 'key' 键，浏览器触发 keydown 事件。
     2. 浏览器调用 绑定在 document 上的所有 keydown 事件监听器，包括你在 useEffect 中注册的 callback 函数。
     3. callback 函数执行，检查事件对象 e.code 是否等于 "key"。
     4. 如果 e.code === "Escape"，则调用 action 函数，执行关闭电影的逻辑。
     5. 清理函数：
          如果 action 函数发生变化或组件即将卸载，useEffect 返回的清理函数将会执行，移除 keydown 事件监听器。
          然后 useEffect 会根据新的依赖项重新绑定监听器，确保使用最新的 action
   */
  //总结:useEffect在这里就是为了在action发生变化的时候触发Cleanup function.
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
