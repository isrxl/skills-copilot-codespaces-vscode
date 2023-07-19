function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}