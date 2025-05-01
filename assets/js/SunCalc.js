// SunCalc.js
// SunCalc.js
export const tzlookup = 

 function (Y, W) {
  const U =
      "XIXHXHXGXGXQXQXPXPXOXOXN##U6U6UW#$U%U%U%U%U%XFXEXEXRXRXVXVXWXWXXXXXYXYXZXZY#Y#Y$Y$Y%Y%XSXSXTXTXUXIXHXHXGXGXQXQVAVA#%#&V'#'U6#(#)U%U%U%U%U%#*U%XEXEVLVLVLVLYGYGYGYG#+W=W=W=W=W=W=Y$X+X+X+X+X+XTXUVPUQ#,T*T*#-VAVA#.#/#0#1#2U6U6UWU%U%U%U%U%#3VLVLXEYH#4#5#6YGYGYG#7X.#8W=W=W=#9X,X,#:#;#<#=#>VPVP#?DX;XDXDXDT3T3T5T3T5T3T5T5T3T3T5T3T3T3T5T3T3T3T5T5T3T3T5T5T3T3T5T5T.T0T.T.T0T0T.T0T.T0T.T.T.T0T.T.UMUMT0UMUMV.UMUMV.UMUMUMV.V.UMV.T0UMT0UMT0T0T0UMT0T0T0UMT0UMUMUMT0UMT0T0T0UMT0T0T0T0T.T.T.T0T.T.T0UMT0UMT0UMUMUMUMV.UMV.V.V.UMUMUMV.UMUMUMV.UMUMV.V.UMUMSESSSSSSXDXDXBXBXDXDXBXDXBXDXBXDXDXDXBXDXDXDXBXDXBXDXBXBXDXDXBXDXBXDXBXBXDXDXBXBXDXDXBXDXDXDXBXDXBXDXBXBXDXDXBXBT5T.T5T5T.T.T5T5",
    T = ['Africa/Abidjan', 'Africa/Accra', 'Africa/Addis_Ababa', 'Africa/Algiers', 'Africa/Asmara', 'Africa/Bamako', 'Africa/Bangui', 'Africa/Banjul', 'Pacific/Tarawa', 'Pacific/Tongatapu', 'Pacific/Wake', 'Pacific/Wallis']
  if (((W = +W), !(-90 <= (Y = +Y) && Y <= 90 && -180 <= W && W <= 180))) throw new RangeError('invalid coordinates')
  if (90 <= Y) return 'Etc/GMT'
  let S = -1,
    V = (48 * (180 + W)) / 360.00000000000006,
    X = (24 * (90 - Y)) / 180.00000000000003,
    Z = 0 | V,
    M = 0 | X,
    G = 96 * M + 2 * Z
  for (G = 56 * U.charCodeAt(G) + U.charCodeAt(G + 1) - 1995; G + T.length < 3136; ) G = 56 * U.charCodeAt((G = 8 * (S = S + G + 1) + 4 * (M = 0 | (X = (2 * (X - M)) % 2)) + 2 * (Z = 0 | (V = (2 * (V - Z)) % 2)) + 2304)) + U.charCodeAt(G + 1) - 1995
  return T[G + T.length - 3136]
}
