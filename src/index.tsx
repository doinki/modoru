import { forwardRef } from 'react';

export const ModoruScript = forwardRef<
  HTMLScriptElement,
  Omit<React.ScriptHTMLAttributes<HTMLScriptElement>, 'dangerouslySetInnerHTML'>
>((props, ref) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          '!function(){let t=window.history.pushState.bind(window.history),i="MODORU_INDEX";Object.defineProperty(window.history,"pushState",{configurable:!0,value:(o,e,n)=>(o[i]=((window.history.state||{})[i]||0)+1,t(o,e,n))})}();',
      }}
      ref={ref}
      {...props}
    />
  );
});
ModoruScript.displayName = 'ModoruScript';

export function isModoruRoot(): boolean {
  return !window.history.state.MODORU_INDEX;
}
