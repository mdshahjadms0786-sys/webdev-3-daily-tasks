const tours = [
  { id: 1, name: "Manali Trip", price: 15000, duration: 5 },
  { id: 2, name: "Goa Beach", price: 20000, duration: 4 },
  { id: 3, name: "Jaipur Heritage", price: 8000, duration: 3 },
];

module.exports = {
  getAll() {
    return tours;
  },
  getById(id) {
    return tours.find((t) => t.id === id);
  },
  create(data) {
    const newTour = { id: tours.length + 1, ...data };
    tours.push(newTour);
    return newTour;
  },
  update(id, data) {
    const tour = tours.find((t) => t.id === id);
    if (tour) Object.assign(tour, data);
    return tour;
  },
  remove(id) {
    const index = tours.findIndex((t) => t.id === id);
    if (index !== -1) return tours.splice(index, 1)[0];
    return null;
  },
};
