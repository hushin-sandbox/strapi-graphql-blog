module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5746c9018819680e6e9d075bae3f7aeb'),
  },
});
