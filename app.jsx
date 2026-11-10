
import React, { useState, useEffect, useMemo } from "react";
import {
  CarFront, Search, User, CalendarDays, MapPin,
  Fuel, Users, Settings, LogOut, Menu, X,
  CheckCircle, ShieldCheck, CreditCard, LayoutDashboard,
  Plus, Trash2, Edit, Eye, Star, Phone, Mail,
  Clock, Wallet, KeyRound, Heart, Filter,
  Gauge, ChevronRight, Home, ClipboardList
} from "lucide-react";

import "./App.css";

// ==========================================
// 1. INITIAL CAR DATABASE
// ==========================================

const initialCars = [
  {
    id: 1,
    name: "Hyundai Creta",
    brand: "Hyundai",
    type: "SUV",
    price: 2800,
    seats: 5,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "White",
    available: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=900&q=80",
    features: ["Air Conditioning", "Bluetooth", "GPS", "Airbags"],
    tag: "Popular"
  },
  {
    id: 2,
    name: "Maruti Swift",
    brand: "Maruti",
    type: "Hatchback",
    price: 1600,
    seats: 5,
    fuel: "Petrol",
    gear: "Manual",
    year: 2025,
    color: "Red",
    available: true,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    features: ["Air Conditioning", "Music System", "ABS"],
    tag: "Budget"
  },
  {
    id: 3,
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    type: "MUV",
    price: 3800,
    seats: 7,
    fuel: "Diesel",
    gear: "Manual",
    year: 2025,
    color: "Silver",
    available: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    features: ["7 Seats", "GPS", "AC", "Airbags"],
    tag: "Family"
  },
  {
    id: 4,
    name: "BMW 3 Series",
    brand: "BMW",
    type: "Luxury",
    price: 7500,
    seats: 5,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "Black",
    available: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
    features: ["Leather Seats", "Sunroof", "GPS", "Premium Audio"],
    tag: "Premium"
  },
  {
    id: 5,
    name: "Tata Nexon EV",
    brand: "Tata",
    type: "Electric",
    price: 3200,
    seats: 5,
    fuel: "Electric",
    gear: "Automatic",
    year: 2025,
    color: "Blue",
    available: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=80",
    features: ["Fast Charging", "GPS", "Airbags"],
    tag: "Eco"
  },
  {
    id: 6,
    name: "Mahindra Thar",
    brand: "Mahindra",
    type: "SUV",
    price: 4200,
    seats: 4,
    fuel: "Diesel",
    gear: "Manual",
    year: 2025,
    color: "Black",
    available: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    features: ["4 Wheel Drive", "Bluetooth", "Air Conditioning"],
    tag: "Adventure"
  },
  {
    id: 7,
    name: "Kia Seltos",
    brand: "Kia",
    type: "SUV",
    price: 3000,
    seats: 5,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "White",
    available: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    features: ["Sunroof", "GPS", "Airbags"],
    tag: "Popular"
  },
  {
    id: 8,
    name: "Honda City",
    brand: "Honda",
    type: "Sedan",
    price: 2500,
    seats: 5,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "Silver",
    available: true,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    features: ["Cruise Control", "GPS", "AC"],
    tag: "Comfort"
  },
  {
    id: 9,
    name: "Mercedes Benz C Class",
    brand: "Mercedes",
    type: "Luxury",
    price: 9000,
    seats: 5,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "Black",
    available: true,
    rating: 5,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
    features: ["Leather Seats", "Sunroof", "Premium Audio"],
    tag: "Luxury"
  },
  {
    id: 10,
    name: "Toyota Fortuner",
    brand: "Toyota",
    type: "SUV",
    price: 6500,
    seats: 7,
    fuel: "Diesel",
    gear: "Automatic",
    year: 2025,
    color: "White",
    available: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    features: ["7 Seats", "4WD", "GPS"],
    tag: "Premium"
  },
  {
    id: 11,
    name: "Maruti Baleno",
    brand: "Maruti",
    type: "Hatchback",
    price: 1800,
    seats: 5,
    fuel: "Petrol",
    gear: "Manual",
    year: 2024,
    color: "Blue",
    available: true,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    features: ["AC", "Bluetooth", "ABS"],
    tag: "Budget"
  },
  {
    id: 12,
    name: "Audi A4",
    brand: "Audi",
    type: "Luxury",
    price: 8000,
    seats: 5,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "Grey",
    available: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
    features: ["Leather Seats", "GPS", "Sunroof"],
    tag: "Luxury"
  },
  {
    id: 13,
    name: "Mahindra Scorpio N",
    brand: "Mahindra",
    type: "SUV",
    price: 4500,
    seats: 7,
    fuel: "Diesel",
    gear: "Manual",
    year: 2025,
    color: "Black",
    available: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    features: ["7 Seats", "GPS", "4WD"],
    tag: "Adventure"
  },
  {
    id: 14,
    name: "Hyundai i20",
    brand: "Hyundai",
    type: "Hatchback",
    price: 1700,
    seats: 5,
    fuel: "Petrol",
    gear: "Manual",
    year: 2025,
    color: "Red",
    available: true,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    features: ["AC", "Bluetooth", "ABS"],
    tag: "Budget"
  },
  {
    id: 15,
    name: "Tata Harrier",
    brand: "Tata",
    type: "SUV",
    price: 3500,
    seats: 5,
    fuel: "Diesel",
    gear: "Automatic",
    year: 2025,
    color: "Grey",
    available: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=80",
    features: ["Panoramic Sunroof", "GPS", "Airbags"],
    tag: "Popular"
  },
  {
    id: 16,
    name: "Kia Carens",
    brand: "Kia",
    type: "MUV",
    price: 3300,
    seats: 7,
    fuel: "Diesel",
    gear: "Automatic",
    year: 2025,
    color: "White",
    available: true,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80",
    features: ["7 Seats", "AC", "GPS"],
    tag: "Family"
  },
  {
    id: 17,
    name: "Volkswagen Virtus",
    brand: "Volkswagen",
    type: "Sedan",
    price: 2900,
    seats: 5,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "Blue",
    available: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    features: ["Cruise Control", "GPS", "AC"],
    tag: "Comfort"
  },
  {
    id: 18,
    name: "MG ZS EV",
    brand: "MG",
    type: "Electric",
    price: 3600,
    seats: 5,
    fuel: "Electric",
    gear: "Automatic",
    year: 2025,
    color: "Green",
    available: true,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=80",
    features: ["Fast Charging", "GPS", "Airbags"],
    tag: "Eco"
  },
  {
    id: 19,
    name: "Porsche 911",
    brand: "Porsche",
    type: "Luxury",
    price: 15000,
    seats: 2,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "Yellow",
    available: true,
    rating: 5,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
    features: ["Sports Mode", "Leather Seats", "Premium Audio"],
    tag: "Sports"
  },
  {
    id: 20,
    name: "Renault Kwid",
    brand: "Renault",
    type: "Hatchback",
    price: 1300,
    seats: 5,
    fuel: "Petrol",
    gear: "Manual",
    year: 2024,
    color: "Orange",
    available: true,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    features: ["AC", "Music System", "ABS"],
    tag: "Economy"
  },
  {
    id: 21,
    name: "Jeep Compass",
    brand: "Jeep",
    type: "SUV",
    price: 4800,
    seats: 5,
    fuel: "Diesel",
    gear: "Automatic",
    year: 2025,
    color: "Black",
    available: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=80",
    features: ["4WD", "GPS", "Airbags"],
    tag: "Adventure"
  },
  {
    id: 22,
    name: "Skoda Slavia",
    brand: "Skoda",
    type: "Sedan",
    price: 2700,
    seats: 5,
    fuel: "Petrol",
    gear: "Automatic",
    year: 2025,
    color: "White",
    available: true,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    features: ["GPS", "Cruise Control", "AC"],
    tag: "Comfort"
  },
  {
    id: 23,
    name: "BMW X5",
    brand: "BMW",
    type: "Luxury",
    price: 11000,
    seats: 5,
    fuel: "Diesel",
    gear: "Automatic",
    year: 2025,
    color: "Blue",
    available: true,
    rating: 5,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
    features: ["Sunroof", "Leather Seats", "GPS"],
    tag: "Premium"
  },
  {
    id: 24,
    name: "Honda Amaze",
    brand: "Honda",
    type: "Sedan",
    price: 1900,
    seats: 5,
    fuel: "Petrol",
    gear: "Manual",
    year: 2024,
    color: "Silver",
    available: true,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=80",
    features: ["AC", "Bluetooth", "ABS"],
    tag: "Economy"
  },
  {
    id: 25,
    name: "Toyota Glanza",
    brand: "Toyota",
    type: "Hatchback",
    price: 1750,
    seats: 5,
    fuel: "Petrol",
    gear: "Manual",
    year: 2025,
    color: "Red",
    available: true,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
    features: ["AC", "Bluetooth", "GPS"],
    tag: "Budget"
  }
];

// ==========================================
// 2. HELPER FUNCTIONS
// ==========================================

const money = (amount) =>
  "₹" + Number(amount || 0).toLocaleString("en-IN");

const readStorage = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const today = () => new Date().toISOString().slice(0, 10);

const calculateDays = (start, end) => {
  if (!start || !end) return 1;

  const difference =
    new Date(end).getTime() - new Date(start).getTime();

  return Math.max(1, Math.ceil(difference / 86400000));
};

// ==========================================
// 3. MAIN APP COMPONENT
// ==========================================

export default function App() {

  const [cars, setCars] = useState(
    () => readStorage("klCars", initialCars)
  );

  const [bookings, setBookings] = useState(
    () => readStorage("klBookings", [])
  );

  const [user, setUser] = useState(
    () => readStorage("klUser", null)
  );

  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("default");

  const [selected, setSelected] = useState(null);
  const [notice, setNotice] = useState("");

  const [loginOpen, setLoginOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  const [favorites, setFavorites] = useState(
    () => readStorage("klFavorites", [])
  );

  const [payMethod, setPayMethod] = useState("UPI");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const [booking, setBooking] = useState({
    pickup: "Guntur",
    start: "",
    end: "",
    days: 1
  });

  const [carForm, setCarForm] = useState({
    name: "",
    brand: "",
    type: "SUV",
    price: "",
    seats: 5,
    fuel: "Petrol",
    gear: "Manual",
    image: "",
    available: true,
    color: "White",
    year: 2025,
    features: ["Air Conditioning"],
    tag: "New"
  });

  const [editingCar, setEditingCar] = useState(null);

  // ========================================
  // 4. SAVE DATA AUTOMATICALLY
  // ========================================

  useEffect(() => {
    localStorage.setItem("klCars", JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    localStorage.setItem("klBookings", JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem("klFavorites", JSON.stringify(favorites));
  }, [favorites]);

  // ========================================
  // 5. NOTIFICATION FUNCTION
  // ========================================

  const flash = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3000);
  };

  // ========================================
  // 6. LOGIN AND REGISTRATION
  // ========================================

  const login = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      flash("Please enter your email and password.");
      return;
    }

    const email = form.email.trim().toLowerCase();

    const role =
      email === "admin@drivenow.com" ? "admin" : "customer";

    const newUser = {
      name: form.name || email.split("@")[0],
      email,
      phone: form.phone,
      role
    };

    setUser(newUser);

    localStorage.setItem("klUser", JSON.stringify(newUser));

    setLoginOpen(false);

    setForm({
      name: "",
      email: "",
      password: "",
      phone: ""
    });

    flash("Welcome to KL DriveNow!");

    if (selected) {
      setPage("booking");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("klUser");
    setPage("home");
    flash("Logged out successfully.");
  };

  // ========================================
  // 7. CAR SEARCH AND FILTERING
  // ========================================

  const filteredCars = useMemo(() => {

    let result = cars.filter((car) => {

      const matchesSearch =
        car.name.toLowerCase().includes(search.toLowerCase()) ||
        car.brand.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        type === "All" || car.type === type;

      return matchesSearch && matchesType && car.available;
    });

    if (sort === "low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;

  }, [cars, search, type, sort]);

  // ========================================
  // 8. NAVIGATION
  // ========================================

  const nav = (nextPage) => {
    setPage(nextPage);
    setMobile(false);
  };

  // ========================================
  // 9. CAR BOOKING
  // ========================================

  const startBooking = (car) => {

    setSelected(car);

    if (!user) {
      setLoginOpen(true);
      return;
    }

    setPage("booking");
  };

  const confirmBooking = (e) => {

    e.preventDefault();

    if (!booking.start || !booking.end) {
      flash("Select pickup and return dates.");
      return;
    }

    if (booking.start < today()) {
      flash("Pickup date cannot be in the past.");
      return;
    }

    if (booking.end <= booking.start) {
      flash("Return date must be after pickup date.");
      return;
    }

    const days = calculateDays(
      booking.start,
      booking.end
    );

    setBooking({
      ...booking,
      days
    });

    setPage("payment");
  };

  // ========================================
  // 10. PAYMENT AND CONFIRMATION
  // ========================================

  const pay = () => {

    if (!selected || !user) {
      flash("Please log in and select a car.");
      return;
    }

    const days = calculateDays(
      booking.start,
      booking.end
    );

    const newBooking = {
      id: "KL" + Date.now().toString().slice(-8),
      car: selected.name,
      carId: selected.id,
      customer: user.name,
      email: user.email,
      phone: user.phone || "",
      pickup: booking.pickup,
      start: booking.start,
      end: booking.end,
      days,
      total: selected.price * days,
      status: "Confirmed",
      method: payMethod,
      date: today()
    };

    setBookings((previous) => [
      newBooking,
      ...previous
    ]);

    setPage("success");
    flash("Booking confirmed successfully!");
  };

  // ========================================
  // 11. CANCEL BOOKING
  // ========================================

  const cancelBooking = (id) => {

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    setBookings((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, status: "Cancelled" }
          : item
      )
    );

    flash("Booking cancelled.");
  };

  // ========================================
  // 12. FAVORITE CARS
  // ========================================

  const toggleFavorite = (id) => {

    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );

    flash("Favorite list updated.");
  };

  // ========================================
  // 13. ADMIN ADD CAR
  // ========================================

  const addCar = (e) => {

    e.preventDefault();

    const newCar = {
      ...carForm,
      id: Date.now(),
      price: Number(carForm.price),
      seats: Number(carForm.seats),
      year: Number(carForm.year),
      rating: 4.5,
      image: carForm.image ||
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
    };

    setCars((previous) => [
      ...previous,
      newCar
    ]);

    setCarForm({
      name: "",
      brand: "",
      type: "SUV",
      price: "",
      seats: 5,
      fuel: "Petrol",
      gear: "Manual",
      image: "",
      available: true,
      color: "White",
      year: 2025,
      features: ["Air Conditioning"],
      tag: "New"
    });

    flash("New car added successfully.");
  };

  // ========================================
  // 14. ADMIN EDIT CAR
  // ========================================

  const editCar = (car) => {
    setEditingCar(car.id);

    setCarForm({
      ...car,
      price: String(car.price)
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const updateCar = (e) => {

    e.preventDefault();

    setCars((previous) =>
      previous.map((car) =>
        car.id === editingCar
          ? {
              ...car,
              ...carForm,
              price: Number(carForm.price)
            }
          : car
      )
    );

    setEditingCar(null);

    setCarForm({
      name: "",
      brand: "",
      type: "SUV",
      price: "",
      seats: 5,
      fuel: "Petrol",
      gear: "Manual",
      image: "",
      available: true,
      color: "White",
      year: 2025,
      features: ["Air Conditioning"],
      tag: "New"
    });

    flash("Car updated successfully.");
  };

  // ========================================
  // 15. ADMIN DELETE CAR
  // ========================================

  const deleteCar = (id) => {

    if (!window.confirm("Delete this car?")) return;

    setCars((previous) =>
      previous.filter((car) => car.id !== id)
    );

    flash("Car deleted successfully.");
  };

  // ========================================
  // 16. ADMIN VEHICLE AVAILABILITY
  // ========================================

  const toggleAvailability = (id) => {

    setCars((previous) =>
      previous.map((car) =>
        car.id === id
          ? { ...car, available: !car.available }
          : car
      )
    );

    flash("Vehicle status updated.");
  };

  // ========================================
  // 17. DASHBOARD CALCULATIONS
  // ========================================

  const confirmedBookings = bookings.filter(
    (item) => item.status === "Confirmed"
  );

  const totalRevenue = confirmedBookings.reduce(
    (total, item) => total + item.total,
    0
  );

  const myBookings = bookings.filter(
    (item) => item.email === user?.email
  );

  // ========================================
  // 18. MAIN RETURN
  // ========================================

  return (

    <div className="app">

      {/* HEADER */}

      <header className="header">

        <div className="nav wrap">

          <button
            className="brand"
            onClick={() => nav("home")}
          >
            <span className="brand-icon">
              <CarFront />
            </span>

            <span>
              KL <b>DriveNow</b>
              <small>CAR RENTAL</small>
            </span>
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <X /> : <Menu />}
          </button>

          <nav className={mobile ? "open" : ""}>

            <button onClick={() => nav("home")}>
              Home
            </button>

            <button onClick={() => nav("cars")}>
              Explore Cars
            </button>

            <button onClick={() => nav("favorites")}>
              Favorites
            </button>

            <button onClick={() => nav("mybookings")}>
              My Bookings
            </button>

            {user?.role === "admin" && (
              <button onClick={() => nav("admin")}>
                Admin
              </button>
            )}

          </nav>

          <div className="nav-right">

            {user ? (
              <>
                <span className="welcome">
                  <User size={16} />
                  {user.name}
                </span>

                <button
                  className="outline small"
                  onClick={logout}
                >
                  <LogOut size={15} />
                  Logout
                </button>
              </>
            ) : (
              <button
                className="primary small"
                onClick={() => setLoginOpen(true)}
              >
                Login / Sign up
              </button>
            )}

          </div>

        </div>

      </header>

      {/* NOTIFICATION */}

      {notice && (
        <div className="toast">
          <CheckCircle size={17} />
          {notice}
        </div>
      )}

      {/* ================================= */}
      {/* HOME PAGE */}
      {/* ================================= */}

      {page === "home" && (

        <>

          <section className="hero">

            <div className="wrap hero-content">

              <span className="eyebrow">
                YOUR JOURNEY, YOUR WAY
              </span>

              <h1>
                Find the perfect car
                <br />
                for <em>every journey.</em>
              </h1>

              <p>
                Book reliable cars at great prices.
                Simple, safe and ready when you are.
              </p>

              <button
                className="primary large"
                onClick={() => nav("cars")}
              >
                Explore our cars →
              </button>

              <div className="hero-stats">

                <div>
                  <b>{cars.length}+</b>
                  <small>Cars available</small>
                </div>

                <div>
                  <b>{bookings.length}+</b>
                  <small>Bookings</small>
                </div>

                <div>
                  <b>24/7</b>
                  <small>Customer support</small>
                </div>

              </div>

            </div>

          </section>

          <section className="wrap section">

            <div className="section-head">

              <div>
                <span className="eyebrow">
                  HANDPICKED FOR YOU
                </span>

                <h2>Popular rental cars</h2>

                <p>
                  Choose a ride that fits your plans and budget.
                </p>
              </div>

              <button
                className="text-btn"
                onClick={() => nav("cars")}
              >
                View all cars →
              </button>

            </div>

            <div className="car-grid">

              {cars.slice(0, 6).map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onBook={startBooking}
                  favorite={favorites.includes(car.id)}
                  onFavorite={toggleFavorite}
                />
              ))}

            </div>

          </section>

          <section className="benefits">

            <div className="wrap benefit-grid">

              <div>
                <ShieldCheck />
                <h3>Trusted & secure</h3>
                <p>Clear pricing and verified vehicle listings.</p>
              </div>

              <div>
                <CreditCard />
                <h3>Easy payments</h3>
                <p>Simple demo checkout and instant confirmation.</p>
              </div>

              <div>
                <CalendarDays />
                <h3>Flexible booking</h3>
                <p>Choose dates that work for your journey.</p>
              </div>

            </div>

          </section>

        </>

      )}

      {/* ================================= */}
      {/* EXPLORE CARS PAGE */}
      {/* ================================= */}

      {page === "cars" && (

        <section className="wrap section page-section">

          <span className="eyebrow">OUR FLEET</span>

          <h2>Find your perfect ride</h2>

          <p className="muted">
            Browse our available cars and compare daily rates.
          </p>

          <div className="filters">

            <div className="searchbox">
              <Search size={18} />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search car or brand..."
              />
            </div>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {[
                "All",
                "SUV",
                "Hatchback",
                "MUV",
                "Luxury",
                "Electric",
                "Sedan"
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Default sorting</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Highest Rating</option>
            </select>

          </div>

          <p className="muted">
            {filteredCars.length} cars found
          </p>

          <div className="car-grid">

            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onBook={startBooking}
                favorite={favorites.includes(car.id)}
                onFavorite={toggleFavorite}
              />
            ))}

          </div>

          {!filteredCars.length && (
            <div className="empty">
              <Search size={35} />
              <p>No cars match your search.</p>
            </div>
          )}

        </section>

      )}

      {/* ================================= */}
      {/* FAVORITES PAGE */}
      {/* ================================= */}

      {page === "favorites" && (

        <section className="wrap section page-section">

          <span className="eyebrow">YOUR COLLECTION</span>

          <h2>Favorite cars</h2>

          <div className="car-grid">

            {cars
              .filter((car) => favorites.includes(car.id))
              .map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onBook={startBooking}
                  favorite={true}
                  onFavorite={toggleFavorite}
                />
              ))}

          </div>

          {favorites.length === 0 && (
            <div className="empty">
              <Heart size={35} />
              <p>You have not added any favorite cars.</p>
              <button
                className="primary"
                onClick={() => nav("cars")}
              >
                Explore cars
              </button>
            </div>
          )}

        </section>

      )}

      {/* ================================= */}
      {/* BOOKING PAGE */}
      {/* ================================= */}

      {page === "booking" && selected && (

        <section className="wrap section narrow">

          <button
            className="back"
            onClick={() => nav("cars")}
          >
            ← Back to cars
          </button>

          <span className="eyebrow">
            RESERVE YOUR RIDE
          </span>

          <h2>Booking details</h2>

          <div className="checkout-card">

            <div className="checkout-car">

              <img
                src={selected.image}
                alt={selected.name}
              />

              <div>
                <b>{selected.name}</b>

                <p>
                  {selected.type} · {selected.gear} · {selected.fuel}
                </p>

                <strong>
                  {money(selected.price)} / day
                </strong>
              </div>

            </div>

            <form
              onSubmit={confirmBooking}
              className="form-grid"
            >

              <label>
                <MapPin /> Pickup location

                <input
                  value={booking.pickup}
                  onChange={(e) =>
                    setBooking({
                      ...booking,
                      pickup: e.target.value
                    })
                  }
                  required
                />
              </label>

              <label>
                <CalendarDays /> Pickup date

                <input
                  type="date"
                  min={today()}
                  value={booking.start}
                  onChange={(e) =>
                    setBooking({
                      ...booking,
                      start: e.target.value
                    })
                  }
                  required
                />
              </label>

              <label>
                <CalendarDays /> Return date

                <input
                  type="date"
                  min={booking.start || today()}
                  value={booking.end}
                  onChange={(e) =>
                    setBooking({
                      ...booking,
                      end: e.target.value
                    })
                  }
                  required
                />
              </label>

              <button
                className="primary large full"
                type="submit"
              >
                Continue to payment →
              </button>

            </form>

          </div>

        </section>

      )}

      {/* ================================= */}
      {/* PAYMENT PAGE */}
      {/* ================================= */}

      {page === "payment" && selected && (

        <section className="wrap section narrow">

          <span className="eyebrow">
            SECURE CHECKOUT DEMO
          </span>

          <h2>Review and pay</h2>

          <div className="checkout-card">

            <h3>Booking summary</h3>

            <div className="summary-line">
              <span>Car</span>
              <b>{selected.name}</b>
            </div>

            <div className="summary-line">
              <span>Pickup location</span>
              <b>{booking.pickup}</b>
            </div>

            <div className="summary-line">
              <span>Pickup date</span>
              <b>{booking.start}</b>
            </div>

            <div className="summary-line">
              <span>Return date</span>
              <b>{booking.end}</b>
            </div>

            <div className="summary-line">
              <span>Rental days</span>
              <b>{calculateDays(booking.start, booking.end)}</b>
            </div>

            <div className="summary-line">
              <span>Price per day</span>
              <b>{money(selected.price)}</b>
            </div>

            <hr />

            <div className="summary-line total">
              <span>Total amount</span>

              <b>
                {money(
                  selected.price *
                  calculateDays(booking.start, booking.end)
                )}
              </b>
            </div>

            <h3>Payment method</h3>

            <div className="payment-options">

              {[
                "UPI",
                "Credit / Debit Card",
                "Pay at pickup"
              ].map((method) => (

                <button
                  key={method}
                  type="button"
                  className={
                    payMethod === method ? "selected" : ""
                  }
                  onClick={() => setPayMethod(method)}
                >
                  {method}
                </button>

              ))}

            </div>

            <p className="muted tiny">
              This is a front-end demonstration.
              No real payment will be collected.
            </p>

            <button
              className="primary large full"
              onClick={pay}
            >
              Confirm demo booking
            </button>

          </div>

        </section>

      )}

      {/* ================================= */}
      {/* SUCCESS PAGE */}
      {/* ================================= */}

      {page === "success" && (

        <section className="wrap section narrow center">

          <div className="success-icon">
            <CheckCircle size={48} />
          </div>

          <span className="eyebrow">
            BOOKING CONFIRMED
          </span>

          <h2>Your ride is reserved!</h2>

          <p className="muted">
            Your demo booking has been saved in this browser.
          </p>

          <button
            className="primary large"
            onClick={() => nav("mybookings")}
          >
            View my bookings
          </button>

        </section>

      )}

      {/* ================================= */}
      {/* MY BOOKINGS PAGE */}
      {/* ================================= */}

      {page === "mybookings" && (

        <section className="wrap section page-section">

          <span className="eyebrow">YOUR TRIPS</span>

          <h2>My bookings</h2>

          {!user ? (

            <div className="empty">
              <p>Please log in to view your bookings.</p>

              <button
                className="primary"
                onClick={() => setLoginOpen(true)}
              >
                Login
              </button>
            </div>

          ) : (

            <BookingList
              bookings={myBookings}
              onCancel={cancelBooking}
            />

          )}

        </section>

      )}

      {/* ================================= */}
      {/* ADMIN DASHBOARD */}
      {/* ================================= */}

      {page === "admin" && (

        <section className="wrap section page-section">

          <span className="eyebrow">
            MANAGEMENT CONSOLE
          </span>

          <h2>Admin dashboard</h2>

          {user?.role !== "admin" ? (

            <p>
              Admin access required.
              Log in with admin@drivenow.com.
            </p>

          ) : (

            <>

              {/* ADMIN STATISTICS */}

              <div className="admin-stats">

                <div>
                  <CarFront />
                  <small>Total cars</small>
                  <b>{cars.length}</b>
                </div>

                <div>
                  <ClipboardList />
                  <small>Total bookings</small>
                  <b>{bookings.length}</b>
                </div>

                <div>
                  <Wallet />
                  <small>Confirmed revenue</small>
                  <b>{money(totalRevenue)}</b>
                </div>

                <div>
                  <CheckCircle />
                  <small>Confirmed bookings</small>
                  <b>{confirmedBookings.length}</b>
                </div>

              </div>

              {/* ADD / EDIT CAR */}

              <div className="checkout-card">

                <h3>
                  {editingCar ? "Edit vehicle" : "Add new vehicle"}
                </h3>

                <form
                  className="form-grid"
                  onSubmit={editingCar ? updateCar : addCar}
                >

                  <label>
                    Car name

                    <input
                      value={carForm.name}
                      onChange={(e) =>
                        setCarForm({
                          ...carForm,
                          name: e.target.value
                        })
                      }
                      required
                    />
                  </label>

                  <label>
                    Brand

                    <input
                      value={carForm.brand}
                      onChange={(e) =>
                        setCarForm({
                          ...carForm,
                          brand: e.target.value
                        })
                      }
                      required
                    />
                  </label>

                  <label>
                    Car type

                    <select
                      value={carForm.type}
                      onChange={(e) =>
                        setCarForm({
                          ...carForm,
                          type: e.target.value
                        })
                      }
                    >
                      <option>SUV</option>
                      <option>Hatchback</option>
                      <option>Sedan</option>
                      <option>MUV</option>
                      <option>Luxury</option>
                      <option>Electric</option>
                    </select>
                  </label>

                  <label>
                    Price per day

                    <input
                      type="number"
                      min="1"
                      value={carForm.price}
                      onChange={(e) =>
                        setCarForm({
                          ...carForm,
                          price: e.target.value
                        })
                      }
                      required
                    />
                  </label>

                  <label>
                    Seats

                    <input
                      type="number"
                      min="1"
                      max="12"
                      value={carForm.seats}
                      onChange={(e) =>
                        setCarForm({
                          ...carForm,
                          seats: e.target.value
                        })
                      }
                    />
                  </label>

                  <label>
                    Fuel type

                    <select
                      value={carForm.fuel}
                      onChange={(e) =>
                        setCarForm({
                          ...carForm,
                          fuel: e.target.value
                        })
                      }
                    >
                      <option>Petrol</option>
                      <option>Diesel</option>
                      <option>Electric</option>
                      <option>CNG</option>
                    </select>
                  </label>

                  <label>
                    Transmission

                    <select
                      value={carForm.gear}
                      onChange={(e) =>
                        setCarForm({
                          ...carForm,
                          gear: e.target.value
                        })
                      }
                    >
                      <option>Manual</option>
                      <option>Automatic</option>
                    </select>
                  </label>

                  <label>
                    Car image URL

                    <input
                      value={carForm.image}
                      onChange={(e) =>
                        setCarForm({
                          ...carForm,
                          image: e.target.value
                        })
                      }
                      placeholder="Paste image URL"
                    />
                  </label>

                  <button
                    type="submit"
                    className="primary large full"
                  >
                    {editingCar ? (
                      <>
                        <Edit size={17} />
                        Update vehicle
                      </>
                    ) : (
                      <>
                        <Plus size={17} />
                        Add vehicle
                      </>
                    )}
                  </button>

                  {editingCar && (
                    <button
                      type="button"
                      className="outline"
                      onClick={() => setEditingCar(null)}
                    >
                      Cancel editing
                    </button>
                  )}

                </form>

              </div>

              {/* VEHICLE INVENTORY */}

              <h3>Vehicle inventory</h3>

              <div className="admin-list">

                {cars.map((car) => (

                  <div key={car.id}>

                    <span>
                      {car.name}

                      <small>
                        {car.type} · {money(car.price)}/day
                      </small>
                    </span>

                    <div className="admin-actions">

                      <button
                        className="icon-btn"
                        onClick={() => editCar(car)}
                        title="Edit car"
                      >
                        <Edit size={16} />
                      </button>

                      <button
                        className="icon-btn"
                        onClick={() => toggleAvailability(car.id)}
                      >
                        {car.available
                          ? "Mark unavailable"
                          : "Mark available"}
                      </button>

                      <button
                        className="icon-btn"
                        onClick={() => deleteCar(car.id)}
                        title="Delete car"
                      >
                        <Trash2 size={16} />
                      </button>

                    </div>

                  </div>

                ))}

              </div>

              {/* ALL CUSTOMER BOOKINGS */}

              <h3>All customer bookings</h3>

              <BookingList
                bookings={bookings}
                onCancel={cancelBooking}
                admin
              />

            </>

          )}

        </section>

      )}

      {/* ================================= */}
      {/* FOOTER */}
      {/* ================================= */}

      <footer>

        <div className="wrap footer-inner">

          <div className="brand footer-brand">
            <CarFront />
            KL <b>DriveNow</b>
          </div>

          <p>
            © 2026 KL DriveNow. Student project demonstration.
          </p>

          <span>Drive safe. Go further.</span>

        </div>

      </footer>

      {/* ================================= */}
      {/* LOGIN / SIGNUP MODAL */}
      {/* ================================= */}

      {loginOpen && (

        <div
          className="modal-backdrop"
          onClick={() => setLoginOpen(false)}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setLoginOpen(false)}
            >
              <X />
            </button>

            <span className="eyebrow">
              WELCOME TO DRIVENOW
            </span>

            <h2>Login / Create account</h2>

            <p className="muted">
              Enter your details to continue.
            </p>

            <form onSubmit={login}>

              <label>
                Full name

                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value
                    })
                  }
                  placeholder="Your name"
                />
              </label>

              <label>
                Email address

                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value
                    })
                  }
                  placeholder="you@example.com"
                />
              </label>

              <label>
                Phone number

                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      phone: e.target.value
                    })
                  }
                  placeholder="Enter phone number"
                />
              </label>

              <label>
                Password

                <input
                  type="password"
                  required
                  minLength="4"
                  value={form.password}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      password: e.target.value
                    })
                  }
                  placeholder="At least 4 characters"
                />
              </label>

              <button className="primary large full">
                Continue
              </button>

            </form>

            <p className="tiny muted">
              Admin demo: admin@drivenow.com.
              Any password of 4 or more characters works.
            </p>

          </div>

        </div>

      )}

    </div>

  );

}

// ==========================================
// 19. REUSABLE CAR CARD COMPONENT
// ==========================================

function CarCard({
  car,
  onBook,
  favorite,
  onFavorite
}) {

  return (

    <article className="car-card">

      <div className="car-photo">

        <img
          src={car.image}
          alt={car.name}
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80";
          }}
        />

        <span className="tag">
          {car.tag}
        </span>

        <button
          className="favorite-btn"
          onClick={() => onFavorite(car.id)}
          title="Add to favorites"
        >
          <Heart
            size={20}
            fill={favorite ? "red" : "none"}
            color={favorite ? "red" : "white"}
          />
        </button>

      </div>

      <div className="car-info">

        <div className="car-title">

          <div>
            <h3>{car.name}</h3>
            <small>{car.type} · {car.year}</small>
          </div>

          <div className="price">
            {money(car.price)}
            <small>/ day</small>
          </div>

        </div>

        <div className="car-rating">
          <Star size={15} fill="orange" color="orange" />
          {car.rating || 4.5}
        </div>

        <div className="specs">

          <span>
            <Users size={15} />
            {car.seats} seats
          </span>

          <span>
            <Fuel size={15} />
            {car.fuel}
          </span>

          <span>
            <Settings size={15} />
            {car.gear}
          </span>

        </div>

        <div className="car-features">

          {car.features?.slice(0, 3).map((feature) => (
            <span key={feature}>
              {feature}
            </span>
          ))}

        </div>

        <button
          className="primary full"
          disabled={!car.available}
          onClick={() => onBook(car)}
        >
          {car.available
            ? "Book this car →"
            : "Unavailable"}
        </button>

      </div>

    </article>

  );

}

// ==========================================
// 20. REUSABLE BOOKING LIST COMPONENT
// ==========================================

function BookingList({
  bookings,
  onCancel,
  admin = false
}) {

  return bookings.length ? (

    <div className="booking-list">

      {bookings.map((booking) => (

        <div
          className="booking-row"
          key={booking.id}
        >

          <div>

            <b>{booking.car}</b>

            <small>
              Booking ID: {booking.id}
            </small>

            <small>
              {booking.start} to {booking.end}
            </small>

            <small>
              Pickup: {booking.pickup}
            </small>

            {admin && (
              <small>
                Customer: {booking.customer} ({booking.email})
              </small>
            )}

            <small>
              Payment: {booking.method}
            </small>

          </div>

          <div className="booking-right">

            <b>{money(booking.total)}</b>

            <span
              className={
                booking.status === "Confirmed"
                  ? "confirmed"
                  : "cancelled"
              }
            >
              {booking.status}
            </span>

            {booking.status === "Confirmed" && (
              <button
                className="icon-btn"
                onClick={() => onCancel(booking.id)}
              >
                Cancel booking
              </button>
            )}

          </div>

        </div>

      ))}

    </div>

  ) : (

    <div className="empty">

      <CalendarDays size={32} />

      <p>
        No bookings yet. Explore cars to make your first reservation.
      </p>

    </div>

  );

}
