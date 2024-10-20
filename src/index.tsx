import { forwardRef } from 'react';

export const ModoruScript = forwardRef<
  HTMLScriptElement,
  Omit<React.ScriptHTMLAttributes<HTMLScriptElement>, 'dangerouslySetInnerHTML'>
>((props, ref) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          '!function(){let t=window.history.pushState.bind(window.history),i="MODORU_INDEX";window.history.pushState=new Proxy(window.history.pushState,{apply:(o,n,[w,s,h])=>t({[i]:(window.history.state[i]||0)+1,...w},s,h)})}();',
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
