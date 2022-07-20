class HomeController {
  index(re, res) {
    res.status(200).json({
      tudoCerto: true,
    });
  }
}

export default new HomeController();
