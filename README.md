# publish-latest-release

> This action publishes the last drafted release for the current repository (if there is one).

⚠️ **This action won't fail if there is none.**

## Usage

```yml
      - name: Publish latest drafted release
        uses: ivangabriele/publish-latest-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
