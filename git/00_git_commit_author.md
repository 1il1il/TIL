# git commit author 설정

최초에 컴퓨터에서 git을 활용하려고 하면, 아래의 설정을 하지 않으면 commit을 할 수 없다.

```bash
$ git config --global user.name _username_
$ git config --global user.email _email_
```

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

- 설정된 이메일이 GIthub에 등록된 이메일과 같도록 설정