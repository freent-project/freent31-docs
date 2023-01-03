/*************************************************/
/*                   WARNING!                    */
/*     This is the custom JS for FreeNT docs.    */
/*   If you are not a JavaScript developer, you  */
/*        should not touch this file.            */
/*************************************************/

window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
      jtd.setTheme('dark');
  } else {
      jtd.setTheme('light');
  }
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    jtd.setTheme('dark');
}
