{
  description = "Jardín de los Sueños - Landing Page";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            # JavaScript runtime
            nodejs_22
            bun

            # Package managers
            nodePackages.npm

            # Development tools
            nodePackages.prettier
            nodePackages.typescript
            nodePackages.typescript-language-server
          ];

          shellHook = ''
            echo "🌳 Jardín de los Sueños - Development Environment"
            echo ""
            echo "Available commands:"
            echo "  bun install    - Install dependencies"
            echo "  bun dev        - Start development server"
            echo "  bun run build  - Build for production"
            echo "  bun run lint   - Run linter"
            echo ""
          '';
        };
      }
    );
}

