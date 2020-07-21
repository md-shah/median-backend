# [1.1.0-develop.1](https://github.com/md-shah/blog-nestjs/compare/v1.0.1...v1.1.0-develop.1) (2020-07-19)


### Bug Fixes

* **docker:** to ignore all files except src and dist ([18cecac](https://github.com/md-shah/blog-nestjs/commit/18cecac76de6c3927bb2c11d3240b26ad44e2be5))
* **docker:** to ignore all secrets from production and staging ([12fcdf3](https://github.com/md-shah/blog-nestjs/commit/12fcdf333634d9aaf67ef4aec4f2633ac8f03cb9))
* **docker:** travis ci not picking rimraf ([10a025c](https://github.com/md-shah/blog-nestjs/commit/10a025cc3102545d0a8be74d43259f31ea8de208))
* **docker:** updated docker-compose and dockerfile ([4745ff2](https://github.com/md-shah/blog-nestjs/commit/4745ff22e8835042a31afc182297b6ccf4199645))
* **docker:** updated dockerfile ([6e51880](https://github.com/md-shah/blog-nestjs/commit/6e518808e6e8cf2701cd06069f2ab5f7a554352d))
* **docker:** updated dockerfile to create dist folder initally ([392e1ed](https://github.com/md-shah/blog-nestjs/commit/392e1edfd4ad8f18ad33035cbd5b54168b111c83))
* **travis:** downgraded docker-compose version from 3.7 to 3.3 ([0d1c820](https://github.com/md-shah/blog-nestjs/commit/0d1c8209cd3ab0d23912c0c6f0bc9c3ab1aacb0e))
* **travis:** moved env file to travis instead of loading from file ([2bc24a2](https://github.com/md-shah/blog-nestjs/commit/2bc24a2c843005a821791c3ea4bae77acb77a71a))
* **travis:** reverted back to 3.8 since travis not supports 3.3+ ([0d5b976](https://github.com/md-shah/blog-nestjs/commit/0d5b9769769fc5258267a5ced92b441c3739047b))


### Features

* **docker:** add unit test build-stage to docker ([a2fc900](https://github.com/md-shah/blog-nestjs/commit/a2fc900ba25586306805042a6035648c60c78b5d))
* **docker:** containarized backend ([7890e2f](https://github.com/md-shah/blog-nestjs/commit/7890e2fada7e92597052c17cdeedbb3e3a057e1e))
* **docker:** updated config for travis CI ([87dafd1](https://github.com/md-shah/blog-nestjs/commit/87dafd16c189b6c4f880ada1e64b8d7e0e33b72a))
* **docker:** updated travis CI to run with docker ([7c9b4f0](https://github.com/md-shah/blog-nestjs/commit/7c9b4f0a71da9b059ddb129a10e56c0e44878c10))

## [1.0.1](https://github.com/md-shah/blog-nestjs/compare/v1.0.0...v1.0.1) (2020-07-12)


### Bug Fixes

* **architecture:** add pre-push hook to run linter and jest ([f95798f](https://github.com/md-shah/blog-nestjs/commit/f95798fc25fa6e445b9c6fc905af17648fca1d4e))

# 1.0.0 (2020-07-11)


### Bug Fixes

* **architecture:** add npm packages for semantic release ([88dd49d](https://github.com/md-shah/blog-nestjs/commit/88dd49dae2c8ec42cc95db6a585a8670da4e0877))
* **architecture:** add npm script to run sematic-release ([5c5952a](https://github.com/md-shah/blog-nestjs/commit/5c5952a56bcfdafce0df5dc87d073eac2930e671))
* **architecture:** linter 'no-extraneous-dependencies' issue fixed ([b467626](https://github.com/md-shah/blog-nestjs/commit/b467626cb5fe54d44b39bec1ff363a70fe39a53d))
* **architecture:** syntax error on release config ([568eba2](https://github.com/md-shah/blog-nestjs/commit/568eba25bd3e9e24a2050da04b9dc0e3c079dbcc))


### Features

* **architecture:** add 'prettier' for consistent code format ([80abf7f](https://github.com/md-shah/blog-nestjs/commit/80abf7f22b8909f151ca8939fd09d105811c0689))
* **architecture:** add 'prettier' for consistent code format ([2186618](https://github.com/md-shah/blog-nestjs/commit/2186618915f98db7a29cd09000f3e1bc2e2de8e7))
* **architecture:** add 'wip' for commit lint ([2ffec00](https://github.com/md-shah/blog-nestjs/commit/2ffec00991a846c6d5904c013973884fb818dfa2))
* **architecture:** add code linter and pre-commit hook for lint ([bff76c1](https://github.com/md-shah/blog-nestjs/commit/bff76c1fd537b77ad3ed45704bbaa12feec325d6))
* **architecture:** add commit message linter ([68dbc05](https://github.com/md-shah/blog-nestjs/commit/68dbc05e4826eb28d425b574ee04a9e3d695156a))
* **architecture:** add env cofig ([229a57f](https://github.com/md-shah/blog-nestjs/commit/229a57f05198110e5369dd077bfabde78f4921a5))
* **architecture:** add release config ([d699361](https://github.com/md-shah/blog-nestjs/commit/d69936147ca27c57d753e9e1430950bb0e98910a))
* **architecture:** add semantic-versioning ([c07e3d9](https://github.com/md-shah/blog-nestjs/commit/c07e3d9faf4c1b8e4fd94b6cd0e2308032512b20))
* **architecture:** add sentenceConverting helper function ([213899a](https://github.com/md-shah/blog-nestjs/commit/213899a4ba2eff68c79ca6d5fb37626201011274))
* **architecture:** add sequilize-postgres basic db connection ([52a4933](https://github.com/md-shah/blog-nestjs/commit/52a4933c5cdf5eff2e67940e3ef049980f91dda1))
* **architecture:** add swagger for api documentation ([2066841](https://github.com/md-shah/blog-nestjs/commit/20668417f2a86cfeb894194c4d2528b09d214a89))
* **architecture:** add travis CI ([518f558](https://github.com/md-shah/blog-nestjs/commit/518f55890c8c9bb2d028c3a88236c951f715292e))
* **architecture:** basic components for the project structure ([e5c6bf8](https://github.com/md-shah/blog-nestjs/commit/e5c6bf89d785ff78517a185f84b678c3ad2ebd35))
* **architecture:** updated code for linter ([94e1b29](https://github.com/md-shah/blog-nestjs/commit/94e1b2957d9bf9e6547f7efc7fc7c35608bb60bb))

# 1.0.0-develop.1 (2020-07-11)


### Bug Fixes

* **architecture:** add npm packages for semantic release ([88dd49d](https://github.com/md-shah/blog-nestjs/commit/88dd49dae2c8ec42cc95db6a585a8670da4e0877))
* **architecture:** add npm script to run sematic-release ([5c5952a](https://github.com/md-shah/blog-nestjs/commit/5c5952a56bcfdafce0df5dc87d073eac2930e671))
* **architecture:** linter 'no-extraneous-dependencies' issue fixed ([b467626](https://github.com/md-shah/blog-nestjs/commit/b467626cb5fe54d44b39bec1ff363a70fe39a53d))
* **architecture:** syntax error on release config ([568eba2](https://github.com/md-shah/blog-nestjs/commit/568eba25bd3e9e24a2050da04b9dc0e3c079dbcc))


### Features

* **architecture:** add 'prettier' for consistent code format ([80abf7f](https://github.com/md-shah/blog-nestjs/commit/80abf7f22b8909f151ca8939fd09d105811c0689))
* **architecture:** add 'prettier' for consistent code format ([2186618](https://github.com/md-shah/blog-nestjs/commit/2186618915f98db7a29cd09000f3e1bc2e2de8e7))
* **architecture:** add 'wip' for commit lint ([2ffec00](https://github.com/md-shah/blog-nestjs/commit/2ffec00991a846c6d5904c013973884fb818dfa2))
* **architecture:** add code linter and pre-commit hook for lint ([bff76c1](https://github.com/md-shah/blog-nestjs/commit/bff76c1fd537b77ad3ed45704bbaa12feec325d6))
* **architecture:** add commit message linter ([68dbc05](https://github.com/md-shah/blog-nestjs/commit/68dbc05e4826eb28d425b574ee04a9e3d695156a))
* **architecture:** add env cofig ([229a57f](https://github.com/md-shah/blog-nestjs/commit/229a57f05198110e5369dd077bfabde78f4921a5))
* **architecture:** add release config ([d699361](https://github.com/md-shah/blog-nestjs/commit/d69936147ca27c57d753e9e1430950bb0e98910a))
* **architecture:** add semantic-versioning ([c07e3d9](https://github.com/md-shah/blog-nestjs/commit/c07e3d9faf4c1b8e4fd94b6cd0e2308032512b20))
* **architecture:** add sentenceConverting helper function ([213899a](https://github.com/md-shah/blog-nestjs/commit/213899a4ba2eff68c79ca6d5fb37626201011274))
* **architecture:** add sequilize-postgres basic db connection ([52a4933](https://github.com/md-shah/blog-nestjs/commit/52a4933c5cdf5eff2e67940e3ef049980f91dda1))
* **architecture:** add swagger for api documentation ([2066841](https://github.com/md-shah/blog-nestjs/commit/20668417f2a86cfeb894194c4d2528b09d214a89))
* **architecture:** add travis CI ([518f558](https://github.com/md-shah/blog-nestjs/commit/518f55890c8c9bb2d028c3a88236c951f715292e))
* **architecture:** basic components for the project structure ([e5c6bf8](https://github.com/md-shah/blog-nestjs/commit/e5c6bf89d785ff78517a185f84b678c3ad2ebd35))
* **architecture:** updated code for linter ([94e1b29](https://github.com/md-shah/blog-nestjs/commit/94e1b2957d9bf9e6547f7efc7fc7c35608bb60bb))
