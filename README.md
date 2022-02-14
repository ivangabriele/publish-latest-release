# publish-latest-release

> This action publishes the latest drafted release available.

⚠️ **This action won't fail if there is none.**

## Usage

```yml
      - name: Publish Latest Release
        uses: ivangabriele/publish-latest-release@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
