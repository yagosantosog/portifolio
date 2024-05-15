<template>
  <div class="container">
    <div id="stars"></div>
    <div id="stars2"></div>
  </div>
</template>

<style lang="scss" scoped>
@function multiple-box-shadow($n) {
  $value: '#{random(3000)}px #{random(3000)}px #FFF';
  @for $i from 2 through $n {
    $value: '#{$value} , #{random(3000)}px #{random(3000)}px #FFF';
  }
  @return unquote($value);
}

$shadows-small: multiple-box-shadow(800);
$shadows-medium: multiple-box-shadow(400);

#stars,
#stars2 {
  position: absolute;
  top: 0;
  left: -15%;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadows-small;
  animation: animStar 50s linear infinite;
}

// #stars:after {
//   content: ' ';
//   position: absolute;
//   top: 2000px;
//   width: 1px;
//   height: 1px;
//   background: transparent;
//   box-shadow: $shadows-small;
// }

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: $shadows-medium;
  animation: animStar 100s linear infinite;
}

// #stars2:after {
//   content: ' ';
//   position: absolute;
//   top: 2000px;
//   width: 2px;
//   height: 2px;
//   background: transparent;
//   box-shadow: $shadows-medium;
// }

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-100vh);
  }
}
</style>
