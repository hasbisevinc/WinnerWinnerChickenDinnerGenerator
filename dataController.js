var pubgApp = angular.module("pubgApp", []);

(function(app){
  "use strict";
  app.controller("dataController", function($scope){
    $scope.gameModes = ["TEAM", "SINGLE"];
    $scope.languages = ["Turkish", "English", "German"];

    $scope.selectedGameMode = "TEAM";
    $scope.selectedLanguage = "English";
    $scope.userName= "UserName";
    $scope.totalPlayer= 99;
    $scope.killed=3;
    $scope.hitPoints= 26;
    $scope.rankPoints=540;
    $scope.endsIn=27;

    $scope.changeToEnglish = function () {
        $scope.TEXT_WINNER_WINNER_CHICKEN_DINNER = "WINNER WINNER CHICKEN DINNER!";
        $scope.TEXT_KILL = "KILL";
        $scope.TEXT_PLAYERS = "players";
        $scope.TEXT_REWARDS = "REWARDS";
        $scope.TEXT_KILL_POINTS = "KILL POINTS";
        $scope.TEXT_HIT_POINTS = "HIT POINTS";
        $scope.TEXT_MATCH_ENDS_IN = "MATCH ENDS IN";
        $scope.TEXT_REPORT = "REPORT";
        $scope.TEXT_KILLCAM = "KILLCAM";
        $scope.TEXT_EXIT_TO_LOBBY = "EXIT TO LOBBY";
        $scope.TEXT_KILLED = "KILLED";

        if ($scope.selectedGameMode == "TEAM") {
            $scope.TEXT_TEAM_RANK_POINTS = "TEAM RANK POINTS";
            $scope.TEXT_TEAM_RANK = "TEAM RANK";
        } else {
            $scope.TEXT_TEAM_RANK_POINTS = "RANK POINTS";
            $scope.TEXT_TEAM_RANK = "RANK";
        }
    }


    $scope.changeToTurkish = function () {
        $scope.TEXT_WINNER_WINNER_CHICKEN_DINNER = "HADİ İYİSİN! ÇORBA PARASI ÇIKTI :)";
        $scope.TEXT_KILL = "ÖLDÜRME";
        $scope.TEXT_PLAYERS = "OYUNCU";
        $scope.TEXT_REWARDS = "ÖDÜL";
        $scope.TEXT_KILL_POINTS = "ÖLDÜRME PUANLARI";
        $scope.TEXT_HIT_POINTS = "İSABET PUANI";
        $scope.TEXT_MATCH_ENDS_IN = "MAÇIN BİTMESİNE";
        $scope.TEXT_REPORT = "BİLDİR";
        $scope.TEXT_KILLCAM = "ÖLÜM KAMERASI";
        $scope.TEXT_EXIT_TO_LOBBY = "LOBİYE DÖN";
        $scope.TEXT_KILLED = "ÖLDÜRME";

        if ($scope.selectedGameMode == "TEAM") {
            $scope.TEXT_TEAM_RANK_POINTS = "TAKIM SIRASI PUANI";
            $scope.TEXT_TEAM_RANK = "TAKIM SIRASI";
        } else {
            $scope.TEXT_TEAM_RANK_POINTS = "SIRALAMA PUANI";
            $scope.TEXT_TEAM_RANK = "SIRA";
        }
    }

    $scope.changeToGerman = function () {
        $scope.TEXT_WINNER_WINNER_CHICKEN_DINNER = "GEWINNER, GEWINNER, HÜHNCHEN-DINNER!";
        $scope.TEXT_KILL = "KILL";
        $scope.TEXT_PLAYERS = "Spieler";
        $scope.TEXT_REWARDS = "BELOHNUNG";
        $scope.TEXT_KILL_POINTS = "KILL-PUNKTE";
        $scope.TEXT_HIT_POINTS = "TREFFERPUNKTE";
        $scope.TEXT_MATCH_ENDS_IN = "MATCH ENDET IN";
        $scope.TEXT_REPORT = "REPORT";
        $scope.TEXT_KILLCAM = "KILLCAM";
        $scope.TEXT_EXIT_TO_LOBBY = "LOBBY";
        $scope.TEXT_KILLED = "GETöTET";

        if ($scope.selectedGameMode == "TEAM") {
            $scope.TEXT_TEAM_RANK_POINTS = "TEAM RANG PUNKTE";
            $scope.TEXT_TEAM_RANK = "TEAM-RANG";
        } else {
            $scope.TEXT_TEAM_RANK_POINTS = "RANG PUNKTE";
            $scope.TEXT_TEAM_RANK = "RANG";
        }
    }
    
    $scope.gameModeChanged = function () {
        $scope.updateLanguage();
    }
    
    $scope.languageChanged = function () {
        $scope.updateLanguage();
    }

    $scope.updateLanguage = function() {
        console.log($scope.selectedLanguage)
        if ($scope.selectedLanguage == "English") {
            $scope.changeToEnglish();
        } else if ($scope.selectedLanguage == "Turkish") {
            $scope.changeToTurkish();
        } else if ($scope.selectedLanguage == "German") {
            $scope.changeToGerman();
        }
    }

    $scope.updateLanguage();
  });
})(pubgApp);
