module.exports = {
  extends: ["@commitlint/config-conventional"],
  // Basic Format of commit message: <type>(<scope>): <subject>
  rules: {
    "body-leading-blank": [ 1, "always" ],
    "footer-leading-blank": [ 1, "always" ],
    "header-max-length": [ 2, "always", 72 ],
    "scope-case": [ 2, "always", "lower-case" ],
    "subject-case": [ 2, "never",
      [ "sentence-case", "start-case", "pascal-case", "upper-case" ]
    ],
    "subject-empty": [ 2, "never" ],
    "subject-full-stop": [ 2, "never", "." ],
    "type-case": [ 2, "always", "lower-case" ],
    "type-empty": [ 2, "never" ],
    "type-enum": [ 2, "always",
      [
        // Based on this : https://github.com/pvdlg/conventional-commit-types
        "feat", // A new feature
        "fix", // A bug Fix
        "docs", // Documentation only changes
        "style", // Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
        "refactor", // A code change that neither fixes a bug nor adds a feature
        "perf", // A code change that improves performance
        "test", // To add unit tests to the file
        "build", // Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
        "ci", // Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
        "chore", // Other changes that don't modify src or test files
        "revert" // Reverts a previous commit
      ]
    ]
  }
};
