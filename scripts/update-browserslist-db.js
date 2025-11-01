// Safe updater for caniuse-lite / browserslist DB
// Uses the library API instead of running external package managers (avoids `bun` invocation errors)

(async function () {
  try {
    const update = require('update-browserslist-db');
    // The library returns a Promise - call it and ignore non-fatal errors
    await update();
    // If successful, exit normally
    // console.log('browserslist DB updated');
  } catch (err) {
    // Swallow errors to avoid breaking installs (network or platform issues shouldn't fail install)
    // You can uncomment the next line for debugging locally:
    // console.warn('update-browserslist-db failed:', err && err.message ? err.message : err);
    process.exit(0);
  }
})();
