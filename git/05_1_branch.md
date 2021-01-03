# Branch

## 1. 명령어

- 브랜치 생성

```bash
$ git branch __브랜치 이름__
```

- 브랜치 이동

```bash
$ git checkout __브랜치 이름__
```

- 브랜치 생성 및 이동

```bash
$ git checkout -b __브랜치 이름__

```
- 브랜치 목록

```bash
$ git branch
```

- 브랜치 병합

  master  브랜치에 `브랜치 이름`을 병합시킨다.

```bash
(master) $ git merge __브랜치 이름__
```

- 브랜치 삭제

```bash
$ git branch -d __브랜치 이름__
```
