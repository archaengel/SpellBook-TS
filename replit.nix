{ pkgs }: {
    deps = with pkgs; [
        cowsay
        nodejs-18_x
        nodePackages.pnpm
    ];
}