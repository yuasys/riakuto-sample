/// <reference types="vite/client" />

interface importMetaEnv {
    readonly VITE_APP_TITLE: string;
    // ここに定義した変数を追加していく
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
