/*
Bobは近所にある円形の公園の外縁をランニングしようと考えました。
しかし公園の半径は分かっているのですが、外周がどのくらいの距離あるかはわかっていません。
半径radiusが与えられるので、円形の公園の周を出力する、circumferenceLength という関数を作成してください。
円周率は 3.14 としてください。

*/
function circumferenceLength(radius:number): number{
    // 関数を完成させてください
    const PI = 3.14;

    return 2 * PI * radius;
}