import { forwardRef } from 'react';

export const ModoruScript = forwardRef<
  HTMLScriptElement,
  Omit<React.ScriptHTMLAttributes<HTMLScriptElement>, 'dangerouslySetInnerHTML'>
>((props, ref) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          '!function(){let t=window.history.pushState,e="__MODORU";Object.defineProperty(window.history,"pushState",{configurable:!0,writable:!0,value(i,o,n){return"object"==typeof i&&null!==i&&(i[e]=((window.history.state||{})[e]||0)+1),t.call(this,i,o,n)}})}();',
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
