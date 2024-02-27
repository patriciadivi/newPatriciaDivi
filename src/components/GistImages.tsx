'use client'

import { makeRequest } from "@/lib/api";
import { Key } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type NameGistProps = {
  nameGist: [];

}

type GistProps = {
  id: number;
  url: string;
  html_url: string;
  description: string;
  files: {
    [key:string]: {
      raw_url: string;
      filename: string;
      language: string;
    }
  }

}

type FilesProps = {
  files: {
    [key:string]: {
      raw_url: string;
      filename: string;
      language: string;
    }
  }
}

export function GistImages({nameGist}: NameGistProps) {
  const [gistElement, setGistElement] = useState<GistProps[]>([]);
  const [filterFiles, setFilterFiles] = useState<any>([]);
  const [test, setTest] = useState<any>([]);

  const dataFiles:any = [
    {
      "url": "https://api.github.com/gists/d1e50eadcf048eb4b82f34ee5632f966",
      "forks_url": "https://api.github.com/gists/d1e50eadcf048eb4b82f34ee5632f966/forks",
      "commits_url": "https://api.github.com/gists/d1e50eadcf048eb4b82f34ee5632f966/commits",
      "id": "d1e50eadcf048eb4b82f34ee5632f966",
      "node_id": "G_kwDOAkskRdoAIGQxZTUwZWFkY2YwNDhlYjRiODJmMzRlZTU2MzJmOTY2",
      "git_pull_url": "https://gist.github.com/d1e50eadcf048eb4b82f34ee5632f966.git",
      "git_push_url": "https://gist.github.com/d1e50eadcf048eb4b82f34ee5632f966.git",
      "html_url": "https://gist.github.com/patriciadivi/d1e50eadcf048eb4b82f34ee5632f966",
      "files": {
        "gistfile1.txt": {
          "filename": "gistfile1.txt",
          "type": "text/plain",
          "language": "Text",
          "raw_url": "https://gist.githubusercontent.com/patriciadivi/d1e50eadcf048eb4b82f34ee5632f966/raw/01b59a8c201755a705b401de23d2d67ce67a37c4/gistfile1.txt",
          "size": 16720
        }
      },
      "public": true,
      "created_at": "2023-08-30T20:23:35Z",
      "updated_at": "2023-09-19T23:25:19Z",
      "description": "habits.svg",
      "comments": 0,
      "user": null,
      "comments_url": "https://api.github.com/gists/d1e50eadcf048eb4b82f34ee5632f966/comments",
      "owner": {
        "login": "patriciadivi",
        "id": 38478917,
        "node_id": "MDQ6VXNlcjM4NDc4OTE3",
        "avatar_url": "https://avatars.githubusercontent.com/u/38478917?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/patriciadivi",
        "html_url": "https://github.com/patriciadivi",
        "followers_url": "https://api.github.com/users/patriciadivi/followers",
        "following_url": "https://api.github.com/users/patriciadivi/following{/other_user}",
        "gists_url": "https://api.github.com/users/patriciadivi/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/patriciadivi/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/patriciadivi/subscriptions",
        "organizations_url": "https://api.github.com/users/patriciadivi/orgs",
        "repos_url": "https://api.github.com/users/patriciadivi/repos",
        "events_url": "https://api.github.com/users/patriciadivi/events{/privacy}",
        "received_events_url": "https://api.github.com/users/patriciadivi/received_events",
        "type": "User",
        "site_admin": false
      },
      "truncated": false
    },
    {
      "url": "https://api.github.com/gists/53963f8bffd9b44359c400c085b4f92e",
      "forks_url": "https://api.github.com/gists/53963f8bffd9b44359c400c085b4f92e/forks",
      "commits_url": "https://api.github.com/gists/53963f8bffd9b44359c400c085b4f92e/commits",
      "id": "53963f8bffd9b44359c400c085b4f92e",
      "node_id": "G_kwDOAkskRdoAIDUzOTYzZjhiZmZkOWI0NDM1OWM0MDBjMDg1YjRmOTJl",
      "git_pull_url": "https://gist.github.com/53963f8bffd9b44359c400c085b4f92e.git",
      "git_push_url": "https://gist.github.com/53963f8bffd9b44359c400c085b4f92e.git",
      "html_url": "https://gist.github.com/patriciadivi/53963f8bffd9b44359c400c085b4f92e",
      "files": {
        "image.svg": {
          "filename": "image.svg",
          "type": "image/svg+xml",
          "language": "SVG",
          "raw_url": "https://gist.githubusercontent.com/patriciadivi/53963f8bffd9b44359c400c085b4f92e/raw/20c126e324dd57477109644107db9c9aa2002fac/image.svg",
          "size": 232
        }
      },
      "public": true,
      "created_at": "2023-07-13T03:11:34Z",
      "updated_at": "2023-10-04T18:25:37Z",
      "description": "image.svg",
      "comments": 0,
      "user": null,
      "comments_url": "https://api.github.com/gists/53963f8bffd9b44359c400c085b4f92e/comments",
      "owner": {
        "login": "patriciadivi",
        "id": 38478917,
        "node_id": "MDQ6VXNlcjM4NDc4OTE3",
        "avatar_url": "https://avatars.githubusercontent.com/u/38478917?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/patriciadivi",
        "html_url": "https://github.com/patriciadivi",
        "followers_url": "https://api.github.com/users/patriciadivi/followers",
        "following_url": "https://api.github.com/users/patriciadivi/following{/other_user}",
        "gists_url": "https://api.github.com/users/patriciadivi/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/patriciadivi/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/patriciadivi/subscriptions",
        "organizations_url": "https://api.github.com/users/patriciadivi/orgs",
        "repos_url": "https://api.github.com/users/patriciadivi/repos",
        "events_url": "https://api.github.com/users/patriciadivi/events{/privacy}",
        "received_events_url": "https://api.github.com/users/patriciadivi/received_events",
        "type": "User",
        "site_admin": false
      },
      "truncated": false
    },
    {
      "url": "https://api.github.com/gists/7f65fd88d1c9a8011d1596ac28e1e448",
      "forks_url": "https://api.github.com/gists/7f65fd88d1c9a8011d1596ac28e1e448/forks",
      "commits_url": "https://api.github.com/gists/7f65fd88d1c9a8011d1596ac28e1e448/commits",
      "id": "7f65fd88d1c9a8011d1596ac28e1e448",
      "node_id": "G_kwDOAkskRdoAIDdmNjVmZDg4ZDFjOWE4MDExZDE1OTZhYzI4ZTFlNDQ4",
      "git_pull_url": "https://gist.github.com/7f65fd88d1c9a8011d1596ac28e1e448.git",
      "git_push_url": "https://gist.github.com/7f65fd88d1c9a8011d1596ac28e1e448.git",
      "html_url": "https://gist.github.com/patriciadivi/7f65fd88d1c9a8011d1596ac28e1e448",
      "files": {
        "memorie.svg": {
          "filename": "memorie.svg",
          "type": "image/svg+xml",
          "language": "SVG",
          "raw_url": "https://gist.githubusercontent.com/patriciadivi/7f65fd88d1c9a8011d1596ac28e1e448/raw/89aac82592497086daa756fcf866ea8d729cb254/memorie.svg",
          "size": 4078898
        },
        "noMemorie.svg": {
          "filename": "noMemorie.svg",
          "type": "image/svg+xml",
          "language": null,
          "raw_url": "https://gist.githubusercontent.com/patriciadivi/7f65fd88d1c9a8011d1596ac28e1e448/raw/028c05a5da1ba007c6c5f32ffd5c7be3ac0879b0/noMemorie.svg",
          "size": 315933
        }
      },
      "public": true,
      "created_at": "2023-07-05T04:12:33Z",
      "updated_at": "2023-07-05T04:18:29Z",
      "description": "noMemorie555",
      "comments": 0,
      "user": null,
      "comments_url": "https://api.github.com/gists/7f65fd88d1c9a8011d1596ac28e1e448/comments",
      "owner": {
        "login": "patriciadivi",
        "id": 38478917,
        "node_id": "MDQ6VXNlcjM4NDc4OTE3",
        "avatar_url": "https://avatars.githubusercontent.com/u/38478917?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/patriciadivi",
        "html_url": "https://github.com/patriciadivi",
        "followers_url": "https://api.github.com/users/patriciadivi/followers",
        "following_url": "https://api.github.com/users/patriciadivi/following{/other_user}",
        "gists_url": "https://api.github.com/users/patriciadivi/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/patriciadivi/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/patriciadivi/subscriptions",
        "organizations_url": "https://api.github.com/users/patriciadivi/orgs",
        "repos_url": "https://api.github.com/users/patriciadivi/repos",
        "events_url": "https://api.github.com/users/patriciadivi/events{/privacy}",
        "received_events_url": "https://api.github.com/users/patriciadivi/received_events",
        "type": "User",
        "site_admin": false
      },
      "truncated": false
    },
    {
      "url": "https://api.github.com/gists/31432328af375086fb1985655d9bdbb6",
      "forks_url": "https://api.github.com/gists/31432328af375086fb1985655d9bdbb6/forks",
      "commits_url": "https://api.github.com/gists/31432328af375086fb1985655d9bdbb6/commits",
      "id": "31432328af375086fb1985655d9bdbb6",
      "node_id": "G_kwDOAkskRdoAIDMxNDMyMzI4YWYzNzUwODZmYjE5ODU2NTVkOWJkYmI2",
      "git_pull_url": "https://gist.github.com/31432328af375086fb1985655d9bdbb6.git",
      "git_push_url": "https://gist.github.com/31432328af375086fb1985655d9bdbb6.git",
      "html_url": "https://gist.github.com/patriciadivi/31432328af375086fb1985655d9bdbb6",
      "files": {
        "cardpatriciadivi.svg": {
          "filename": "cardpatriciadivi.svg",
          "type": "image/svg+xml",
          "language": "SVG",
          "raw_url": "https://gist.githubusercontent.com/patriciadivi/31432328af375086fb1985655d9bdbb6/raw/a58eb77695a69a0dcbcf35780a76365f680fc447/cardpatriciadivi.svg",
          "size": 331711
        }
      },
      "public": true,
      "created_at": "2022-06-19T09:37:54Z",
      "updated_at": "2022-06-19T09:43:33Z",
      "description": "",
      "comments": 0,
      "user": null,
      "comments_url": "https://api.github.com/gists/31432328af375086fb1985655d9bdbb6/comments",
      "owner": {
        "login": "patriciadivi",
        "id": 38478917,
        "node_id": "MDQ6VXNlcjM4NDc4OTE3",
        "avatar_url": "https://avatars.githubusercontent.com/u/38478917?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/patriciadivi",
        "html_url": "https://github.com/patriciadivi",
        "followers_url": "https://api.github.com/users/patriciadivi/followers",
        "following_url": "https://api.github.com/users/patriciadivi/following{/other_user}",
        "gists_url": "https://api.github.com/users/patriciadivi/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/patriciadivi/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/patriciadivi/subscriptions",
        "organizations_url": "https://api.github.com/users/patriciadivi/orgs",
        "repos_url": "https://api.github.com/users/patriciadivi/repos",
        "events_url": "https://api.github.com/users/patriciadivi/events{/privacy}",
        "received_events_url": "https://api.github.com/users/patriciadivi/received_events",
        "type": "User",
        "site_admin": false
      },
      "truncated": false
    },
  ]

  async function handleFilterFiles() {
    // const files = await gistElement?.filter((element:any) => (element.files) && element)
    // setTest(files)
    // console.log('----> gistElement', gistElement)
  }

  async function fetchGistElement() {
    const gist = await makeRequest('patriciadivi/gists', 'get') // GistImages retorna uma Promise<Element>
    setGistElement(gist);
  }

  useEffect(() => {
    fetchGistElement();
    console.log('entrei aqui');
    
    // handleFilterFiles();

  }, []);
  // console.log('----> filterFiles', test)
  // const gist: GistProps[] = await makeRequest('patriciadivi/gists', 'get')

  return (
    <>
      {/* <p>{ `${nameGist.toLocaleLowerCase()}.svg` }</p> */}
      
       
        
    </>
  )
}