# git commit author 설정

## 1. git config

- 최초로 git을 활용하려고 하면, 아래의 설정을 통해 원격 저장소와 연결
- 원격 저장소와 이름은 달라도 되지만 이메일은 같아야 제대로 원격 저장소에 커밋이 올라간다.

```bash
$ git config --global user.name _username_
$ git config --global user.email _email_
```

---



## 2. 설정확인

- 설정을 확인할때는 아래의 명령어를 활용한다.

```bash
$ git config --global -l
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
user.name=0hyun
user.email=yoo9516@gmail.com
```
