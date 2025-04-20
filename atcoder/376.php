<?php
/*
@の位置
easy
メールアドレス email が与えられるので、@ の位置を返す getAtLocation という関数を作成してください。ただし、@ が含まれていない場合は -1 を返してください。また、email の最初の文字は 1 番目と数えます。
*/

function getAtLocation(string $email): int{
    // 関数を完成させてください
    $position = strpos($email, "@");

    if ($position === false) {
        return -1;
    }

    return $position + 1;
}