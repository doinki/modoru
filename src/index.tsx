import { forwardRef } from 'react';

export const ModoruScript = forwardRef<
  HTMLScriptElement,
  Omit<React.ScriptHTMLAttributes<HTMLScriptElement>, 'dangerouslySetInnerHTML'>
>((props, ref) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          '!function(){let t=window.history.pushState,e=window.history.replaceState,i="__MODORU";Object.defineProperty(window.history,"pushState",{configurable:!0,writable:!0,value(e,o,r){return"object"==typeof e&&null!==e&&(e[i]=((window.history.state||{})[i]||0)+1),t.call(this,e,o,r)}}),Object.defineProperty(window.history,"replaceState",{configurable:!0,writable:!0,value(t,o,r){return"object"==typeof t&&null!==t&&(t[i]=(window.history.state||{})[i]||0),e.call(this,t,o,r)}})}();',
      }}
      ref={ref}
      {...props}
    />
  );
});
ModoruScript.displayName = 'ModoruScript';

export function isModoruRoot(): boolean {
  if (
    typeof window.history.state === 'object' &&
    window.history.state !== null
  ) {
    return !window.history.state.__MODORU;
  }

  return true;
}
