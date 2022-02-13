# publish-latest-release

> This action publishes the latest drafted release available.

⚠️ **This action won't fail if there is none.**

## Usage

```yml
      - name: Publish latest drafted release
        uses: ivangabriele/publish-latest-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
