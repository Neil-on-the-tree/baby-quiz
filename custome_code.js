<script>
  // 监听表单提交事件
  $("#quiz-form").submit(function() {
    fadeOut(document.querySelector("#submit"));

    // 收集表单输入值，如果没有选择则设为默认值10
    const answer1 = getAnswerValue('one');
    const answer2 = getAnswerValue('two');
    const answer3 = getAnswerValue('three');
    const answer4 = getAnswerValue('four');
    const answer5 = getAnswerValue('five');
    const answer6 = getAnswerValue('six');
    const answer7 = getAnswerValue('seven');
    const answer8 = getAnswerValue('eight');
    const answer9 = getAnswerValue('nine');
    const answer10 = getAnswerValue('ten');

    // 进行计算
    const result = calculateResult(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10);
    
    if (result < 50){
    	document.querySelector("#result").innerText = 
      'Maybe you can consider having a baby.';}
    else{
    	document.querySelector("#result").innerText = 
      'You should have a cat.';}

    // 显示结果容器
    fadeIn(document.querySelector(".results-container"));
    
    return false; // 防止表单默认提交行为
  });

  // 获取答案值的函数，未选择时返回默认值10
  function getAnswerValue(questionName) {
    const element = document.querySelector(`input[name="${questionName}"]:checked`);
    return element ? Number(element.value) : 10;
  }

  // 计算结果的函数
  function calculateResult(answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) {
    // 这是一个示例计算，你需要根据你的实际需求修改
    const total = answer1 + answer2 + answer3 + answer4 + answer5 + answer6 + answer7 + answer8 + answer9 + answer10;
    return total; // 返回计算结果
  }

  // 动画函数
  function fadeOut(e) {
    e.style.transition = "opacity 0.5s";
    e.style.opacity = 0;
    setTimeout(() => { e.style.display = "none"; }, 700);
  }

  function fadeIn(e) {
    e.style.opacity = 0;
    e.style.display = "block";
    e.style.transition = "opacity 0.5s";
    setTimeout(() => { e.style.opacity = 1; }, 500);
  }
</script>
