class UserScoreData {
    constructor(data) {
      this.data = data;
    }
  
    getFormattedScore() {
      const { todayScore, score } = this.data;
      const selectedScore = todayScore || score;
      const normalizedScore = Math.max(0, Math.min(selectedScore * 100, 100));
      return parseFloat(normalizedScore.toFixed(2));
    }
  
    getScoreText() {
      return `${this.getFormattedScore()}%`;
    }
  }
  
  export default UserScoreData;