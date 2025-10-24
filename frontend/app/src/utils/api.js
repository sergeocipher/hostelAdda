const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

export const api = {
  // AUTH -------------------
  signup: async (name, email, password) => {
    const res = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    return res.json();
  },

  login: async (email, password) => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return res.json();
  },

  // POSTS -------------------
  getAllPosts: async () => {
    const res = await fetch(`${API_BASE_URL}/posts`);
    return res.json();
  },

  createPost: async (token, postData) => {
    const res = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    });
    return res.json();
  },

  getPostById: async (id) => {
    const res = await fetch(`${API_BASE_URL}/posts/${id}`);
    return res.json();
  },

  // PARTICIPATION -------------------
  joinPost: async (postId, data, token) => {
  const res = await fetch(`${API_BASE_URL}/participations/${postId}/join`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to join post");
  }

  return res.json();
},

getMyPosts: async (token) => {
  const res = await fetch(`${API_BASE_URL}/posts/my-posts`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to fetch user's posts");
  }
  return res.json();
},

 getParticipants: async (postId) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_BASE_URL}/participations/${postId}/participants`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to fetch participants");
  }

  return res.json();
},
deletePost: async (token, postId) => {
  const res = await fetch(`${API_BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Failed to delete post");
  }

  return res.json();
},

leavePost: async (token, postId) => {
    const res = await fetch(`${API_BASE_URL}/participations/${postId}/leave`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  },
};
