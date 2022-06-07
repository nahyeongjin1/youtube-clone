export const trending = (req, res) => {
  const videos = [
    {
      title: "Video #1",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #2",
      rating: 4.5,
      comments: 3420,
      createdAt: "21 minutes ago",
      views: 10938,
      id: 2,
    },
    {
      title: "Video #3",
      rating: 2,
      comments: 1,
      createdAt: "1 minutes ago",
      views: 5035,
      id: 3,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};
