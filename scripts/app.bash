gst ; echo ; echo '==========' ; echo ; echo 'add and commit?' ; read ac
if [ -z $ac]
then
  ga . ; gst ; echo 'meaningful message: ' ; read msg ; gc -m "$msg" ;
  echo ; echo '==========' ; echo 'Push?' ; read push
  if [ -z $push]
  then
    echo ; echo '==========' ; echo 'origin: ' ; read origin ; echo 'master: ' ; read master ; gp $origin $master
  fi
fi


echo '==========' ; read 'teste' tst ; echo your test is $tst


	gh repo create NAME —public —clone

	gh repo create 'name' —public —clone -d 'descripition'
	gh repo create 'wizardry' —public —clone -d 'bash, cli, zsh, scripting'
cd code/lcalazansl ; mkdir wizardry && cd wizardry/ ; touch readme.md .env .gitignore '.env '>>.gitignore ;
printf “This is some text here \n The second line \n The third line” >> readme.md
